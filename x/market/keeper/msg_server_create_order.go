package keeper

import (
	"context"
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/onomyprotocol/market/x/market/types"
)

func (k msgServer) CreateOrder(goCtx context.Context, msg *types.MsgCreateOrder) (*types.MsgCreateOrderResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	/*
			    // TODO: validate orderType is 0 or 1
		        require(coinAsk != coinBid, "Bid and ask coin cannot be the same");
		        require(position.owner == msg.sender, "Position not owned by sender");
		        require(position.amountBid > 0, "Amount of bid must be greater than zero");
	*/

	amount, _ := sdk.NewIntFromString(msg.Amount)

	coinBid := sdk.NewCoin(msg.DenomBid, amount)

	coinsBid := sdk.NewCoins(coinBid)

	// moduleAcc := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// Get the borrower address
	creator, _ := sdk.AccAddressFromBech32(msg.Creator)

	// Check if order creator has available balance
	if err := k.validateSenderBalance(ctx, creator, coinsBid); err != nil {
		return nil, err
	}

	memberAsk, found := k.GetMember(ctx, msg.DenomBid, msg.DenomAsk)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrMemberNotFound, "Member %s", msg.DenomAsk)
	}

	memberBid, found := k.GetMember(ctx, msg.DenomAsk, msg.DenomBid)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrMemberNotFound, "Member %s", msg.DenomBid)
	}

	numerator, _ := sdk.NewIntFromString(msg.Rate[0])

	denominator, _ := sdk.NewIntFromString(msg.Rate[1])

	rate := []sdk.Int{numerator, denominator}

	prev, _ := strconv.ParseUint(msg.Prev, 10, 64)

	next, _ := strconv.ParseUint(msg.Next, 10, 64)

	// Create the uid
	uid := k.GetUidCount(ctx)

	var order = types.Order{
		Uid:       uid,
		Owner:     msg.Creator,
		Active:    true,
		DenomAsk:  msg.DenomAsk,
		DenomBid:  msg.DenomBid,
		OrderType: msg.OrderType,
		Amount:    amount,
		Rate:      rate,
		Prev:      prev,
		Next:      next,
	}

	// Case 1
	// Only order in book
	if prev == 0 && next == 0 {

		/**********************************************************************
		* THEN Member[AskCoin, BidCoin] stop/limit field must be 0            *
		* Stop / Limit = 0 means that the book is empty                       *
		**********************************************************************/
		if msg.OrderType == "stop" {
			if memberBid.Stop != 0 {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Bid Member stop field not 0")
			}

			// Stop order is valid

			// Update MemberBid Stop Head
			memberBid.Stop = uid

			// Increment UID Counter
			k.SetUidCount(ctx, uid+1)

			// Set Order and MemberBid
			k.SetOrder(ctx, order)
			k.SetMember(ctx, memberBid)

			// Transfer order amount to module
			sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
			if sdkError != nil {
				return nil, sdkError
			}

			// Execute Ask Limit first which will check stops
			// if there are no Ask Limits enabled.  This is a safe
			// guard in the case there is a stop run.
			// Stop run would potentially take place if
			// stop book is checked first repeatedly during price fall
			// Execute Limit executeLimit(coinBid, coinAsk, memberBid, memberAsk, 0);

		}

		if msg.OrderType == "limit" {
			if memberBid.Limit != 0 {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Bid Member limit field not 0")
			}

			// Limit order is valid

			// Update MemberBid Limit Head
			memberBid.Limit = uid

			// Increment UID Counter
			k.SetUidCount(ctx, uid+1)

			// Set Order and MemberBid
			k.SetOrder(ctx, order)
			k.SetMember(ctx, memberBid)

			// Transfer order amount to module
			sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
			if sdkError != nil {
				return nil, sdkError
			}

			// Execute Limit executeLimit(coinAsk, coinBid, memberAsk, memberBid, 0);
		}

	}

	// Case 2
	// New head of the book
	if order.Prev == 0 && order.Next > 0 {

		nextOrder, _ := k.GetOrder(ctx, next)
		if !nextOrder.Active {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Next order not active")
		}
		if nextOrder.Prev != 0 {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Next order not currently head of book")
		}

		if msg.OrderType == "stop" {

			if types.LTE(order.Rate, nextOrder.Rate) {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate less than or equal Next")
			}

			// Set order as new head of MemberBid Stop
			memberBid.Stop = uid

			// Set nextOrder prev field to order
			nextOrder.Prev = uid

			// Transfer order amount to module
			sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
			if sdkError != nil {
				return nil, sdkError
			}

			// Increment UID Counter
			k.SetUidCount(ctx, uid+1)

			// Set Order and MemberBid
			k.SetOrder(ctx, order)
			k.SetMember(ctx, memberBid)

			// executeLimit(coinBid, coinAsk, memberBid, memberAsk, 0);
		}

		if msg.OrderType == "limit" {

			if types.GTE(order.Rate, nextOrder.Rate) {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate greater than or equal Next")
			}

			// Set order as new head of MemberBid Limit
			memberBid.Limit = uid

			// Set nextOrder prev field to order
			nextOrder.Prev = uid

			// Transfer order amount to module
			sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
			if sdkError != nil {
				return nil, sdkError
			}

			// Increment UID Counter
			k.SetUidCount(ctx, uid+1)

			// Set Order and MemberBid
			k.SetOrder(ctx, order)
			k.SetMember(ctx, memberBid)

			// executeLimit(coinAsk, coinBid, memberAsk, memberBid, 0);
		}

		// Case 3
		// New tail of book
		if order.Prev > 0 && order.Next == 0 {

			prevOrder, _ := k.GetOrder(ctx, prev)
			if !prevOrder.Active {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Prev order not active")
			}
			if prevOrder.Next != 0 {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Prev order not currently tail of book")
			}

			if msg.OrderType == "stop" {

				if types.GT(order.Rate, nextOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate greater than Prev")
				}

				// Set nextOrder Next field to Order
				nextOrder.Next = uid

				// Transfer order amount to module
				sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
				if sdkError != nil {
					return nil, sdkError
				}

				// Increment UID Counter
				k.SetUidCount(ctx, uid+1)

				// Set Order and MemberBid
				k.SetOrder(ctx, order)
				k.SetMember(ctx, memberBid)

				// executeLimit(coinBid, coinAsk, memberBid, memberAsk, 0);
			}

			if msg.OrderType == "limit" {

				if types.LT(order.Rate, nextOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate less than Prev")
				}

				// Set nextOrder Next field to Order
				nextOrder.Next = uid

				// Transfer order amount to module
				sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
				if sdkError != nil {
					return nil, sdkError
				}

				// Increment UID Counter
				k.SetUidCount(ctx, uid+1)

				// Set Order and MemberBid
				k.SetOrder(ctx, order)
				k.SetMember(ctx, memberBid)

				// executeLimit(coinAsk, coinBid, memberAsk, memberBid, 0);
			}
		}

		// Case 4
		// IF next position and prev position are stated
		if order.Prev > 0 && order.Next > 0 {
			prevOrder, _ := k.GetOrder(ctx, prev)
			nextOrder, _ := k.GetOrder(ctx, next)

			if !prevOrder.Active {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Prev order not active")
			}
			if !nextOrder.Active {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Next order not active")
			}

			if !(nextOrder.Prev == prevOrder.Uid && prevOrder.Next == nextOrder.Uid) {
				return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Prev and Next are not adjacent")
			}

			if msg.OrderType == "stop" {

				if types.GT(order.Rate, prevOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate greater than Prev")
				}

				if types.LTE(order.Rate, nextOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate less than or equal to Next")
				}

				prevOrder.Next = uid
				nextOrder.Prev = uid

				// Transfer order amount to module
				sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
				if sdkError != nil {
					return nil, sdkError
				}

				// Increment UID Counter
				k.SetUidCount(ctx, uid+1)

				// Set Orders and MemberBid
				k.SetOrder(ctx, order)
				k.SetOrder(ctx, prevOrder)
				k.SetOrder(ctx, nextOrder)
				k.SetMember(ctx, memberBid)

				// executeLimit(coinBid, coinAsk, memberBid, memberAsk, 0);
			}

			if msg.OrderType == "limit" {

				if types.LT(order.Rate, prevOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate less than Prev")
				}

				if types.GTE(order.Rate, nextOrder.Rate) {
					return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Order rate greater than or equal to Next")
				}

				prevOrder.Next = uid
				nextOrder.Prev = uid

				// Transfer order amount to module
				sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinsBid)
				if sdkError != nil {
					return nil, sdkError
				}

				// Increment UID Counter
				k.SetUidCount(ctx, uid+1)

				// Set Orders and MemberBid
				k.SetOrder(ctx, order)
				k.SetOrder(ctx, prevOrder)
				k.SetOrder(ctx, nextOrder)
				k.SetMember(ctx, memberBid)

				// executeLimit(coinAsk, coinBid, memberAsk, memberBid, 0);
			}
		}
	}

	_ = memberAsk
	_ = memberBid

	_ = ctx

	return &types.MsgCreateOrderResponse{}, nil
}
