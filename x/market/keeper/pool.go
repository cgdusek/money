package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/onomyprotocol/market/x/market/types"
)

// SetPool set a specific pool in the store from its index
func (k Keeper) SetPool(ctx sdk.Context, pool types.Pool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PoolKeyPrefix))
	b := k.cdc.MustMarshal(&pool)
	store.Set(types.PoolKey(
		pool.Pair,
		pool.Denom1,
		pool.Denom2,
		pool.Leader,
	), b)
}

// GetPool returns a pool from its index
func (k Keeper) GetPool(
	ctx sdk.Context,
	pair string,
	denom1 string,
	denom2 string,
	leader string,

) (val types.Pool, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PoolKeyPrefix))

	b := store.Get(types.PoolKey(
		pair,
		denom1,
		denom2,
		leader,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemovePool removes a pool from the store
func (k Keeper) RemovePool(
	ctx sdk.Context,
	pair string,
	denom1 string,
	denom2 string,
	leader string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PoolKeyPrefix))
	store.Delete(types.PoolKey(
		pair,
		denom1,
		denom2,
		leader,
	))
}

// GetAllPool returns all pool
func (k Keeper) GetAllPool(ctx sdk.Context) (list []types.Pool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PoolKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}