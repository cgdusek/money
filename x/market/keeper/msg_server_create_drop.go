package keeper

import (
	"context"
	"sort"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/onomyprotocol/market/x/market/types"
)

func (k msgServer) CreateDrop(goCtx context.Context, msg *types.MsgCreateDrop) (*types.MsgCreateDropResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	pairMsg := strings.Split(msg.Pair, ",")
	sort.Strings(pairMsg)

	denom1 := pairMsg[1]
	denom2 := pairMsg[2]

	pair := strings.Join(pairMsg, ",")

	pool, found := k.GetPool(ctx, pair)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrPoolNotFound, "%s", pair)
	}

	member1, found := k.GetMember(ctx, denom2, denom1)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrPoolNotFound, "%s", pair)
	}

	member2, found := k.GetMember(ctx, denom1, denom2)
	if !found {
		return nil, sdkerrors.Wrapf(types.ErrPoolNotFound, "%s", pair)
	}

	// Create the uid
	dropID := k.GetUidCount(ctx)

	prev1, _ := strconv.ParseUint(msg.Prev1, 10, 64)
	next1, _ := strconv.ParseUint(msg.Next1, 10, 64)
	prev2, _ := strconv.ParseUint(msg.Prev2, 10, 64)
	next2, _ := strconv.ParseUint(msg.Next2, 10, 64)

	// Case 1
	// Only drop in pool
	if prev1 == 0 && next1 == 0 && prev2 == 0 && next2 == 0 {
		if member1.Protect != 0 {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Member 1 protect field not 0")
		}

		if member2.Protect != 0 {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Member 2 protect field not 0")
		}

		member1.Protect = dropID
		member2.Protect = dropID
	}

	// Case 2 Side 1
	// New head of the book
	if prev1 == 0 && next1 > 0 {
		/**
		nextDrop, _ := k.GetDrop(ctx, next1)
		if !nextOrder.Active {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Next order not active")
		}
		if nextDrop.Prev1 != 0 {
			return nil, sdkerrors.Wrapf(types.ErrInvalidOrder, "Next order not currently head of book")
		}
		**/
	}

	// Case 2 Side 2
	// New head of the book
	if prev2 == 0 && next2 > 0 {

	}

	// Case 3 Side 1
	// New tail of book
	if prev1 > 0 && next1 == 0 {

	}

	// Case 3 Side 2
	// New tail of book
	if prev2 > 0 && next2 == 0 {

	}

	// Case 4 Side 1
	// IF next position and prev position are stated
	if prev1 > 0 && next1 > 0 {

	}

	// Case 4 Side 2
	// IF next position and prev position are stated
	if prev2 > 0 && next2 > 0 {

	}

	// The Pool Sum current is defined as:
	// poolSum == AMM A Coin Balance + AMM B Coin Balance
	poolSum := member1.Balance.Add(member2.Balance)

	drops, _ := sdk.NewIntFromString(msg.Drops)

	// The beginning Drop Sum is defined as:
	// dropSum == Total amount of coinA+coinB needed to create the drop based on pool exchange rate
	dropSum := ((drops.Mul(poolSum).Mul(sdk.NewInt(10 ^ 18))).Quo(pool.Drops)).Quo(sdk.NewInt(10 ^ 18))

	// dropSum == A + B
	// dropSum = B + B * exchrate(A/B)
	// dropSum = B * (1 + exchrate(A/B))
	// B = dropSum / (1 + exchrate(A/B))
	// 1 + exchrate(A/B) = 1 + AMM A Balance / AMM B Balance
	// = AMM B Balance / AMM B Balance + AMM A Balance / AMM B Balance
	// = (AMM B Balance + AMM A Balance)/AMM B Balance
	// B = dropSum / [(AMM B Balance + AMM A Balance)/AMM B Balance]
	amount1 := dropSum.Mul(sdk.NewInt(10 ^ 18)).Quo((poolSum.Mul(sdk.NewInt(10 ^ 18))).Quo(member2.Balance))

	coin1 := sdk.NewCoin(denom1, amount1)

	// The purchase price of the drop in A coin must be less than Available Balance
	amount2 := dropSum.Sub(amount1)

	coin2 := sdk.NewCoin(denom2, amount2)

	coinPair := sdk.NewCoins(coin1, coin2)

	// moduleAcc := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// Get the borrower address
	creator, _ := sdk.AccAddressFromBech32(msg.Creator)

	if err := k.validateSenderBalance(ctx, creator, coinPair); err != nil {
		return nil, err
	}

	// Use the module account as pool account
	sdkError := k.bankKeeper.SendCoinsFromAccountToModule(ctx, creator, types.ModuleName, coinPair)
	if sdkError != nil {
		return nil, sdkError
	}

	// Deposit into Pool
	member1.Balance = member1.Balance.Add(amount1)
	k.SetMember(ctx, member1)

	member2.Balance = member2.Balance.Add(amount2)
	k.SetMember(ctx, member2)

	// Get Drop Creator and Pool Leader total drops from all drops owned
	sumDropsCreator := k.GetOwnerDropsInt(ctx, msg.Creator).Add(drops)
	sumDropsLeader := k.GetOwnerDropsInt(ctx, pool.Leader)

	// If Creator totaled owned drops is greater than Leader then
	// Creator is new leader
	if sumDropsCreator.GT(sumDropsLeader) {
		pool.Leader = msg.Creator
	}

	pool.Drops = pool.Drops.Add(drops)
	k.SetPool(ctx, pool)

	var drop = types.Drop{
		Uid:    dropID,
		Owner:  msg.Creator,
		Pair:   pair,
		Drops:  drops,
		Sum:    dropSum,
		Active: true,
	}

	// Add the drop to the keeper
	k.SetDrop(
		ctx,
		drop,
	)

	// Update drop uid count
	k.SetUidCount(ctx, dropID+1)

	return &types.MsgCreateDropResponse{}, nil
}
