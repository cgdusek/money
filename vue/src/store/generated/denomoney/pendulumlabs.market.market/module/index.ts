// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateOrder } from "./types/denomoney/tx";
import { MsgdenomoneyOrder } from "./types/denomoney/tx";
import { MsgCreatePool } from "./types/denomoney/tx";
import { MsgCreateDrop } from "./types/denomoney/tx";
import { MsgCancelOrder } from "./types/denomoney/tx";
import { MsgRedeemDrop } from "./types/denomoney/tx";


const types = [
  ["/pendulumlabs.denomoney.denomoney.MsgCreateOrder", MsgCreateOrder],
  ["/pendulumlabs.denomoney.denomoney.MsgdenomoneyOrder", MsgdenomoneyOrder],
  ["/pendulumlabs.denomoney.denomoney.MsgCreatePool", MsgCreatePool],
  ["/pendulumlabs.denomoney.denomoney.MsgCreateDrop", MsgCreateDrop],
  ["/pendulumlabs.denomoney.denomoney.MsgCancelOrder", MsgCancelOrder],
  ["/pendulumlabs.denomoney.denomoney.MsgRedeemDrop", MsgRedeemDrop],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgCreateOrder", value: MsgCreateOrder.fromPartial( data ) }),
    msgdenomoneyOrder: (data: MsgdenomoneyOrder): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgdenomoneyOrder", value: MsgdenomoneyOrder.fromPartial( data ) }),
    msgCreatePool: (data: MsgCreatePool): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgCreatePool", value: MsgCreatePool.fromPartial( data ) }),
    msgCreateDrop: (data: MsgCreateDrop): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgCreateDrop", value: MsgCreateDrop.fromPartial( data ) }),
    msgCancelOrder: (data: MsgCancelOrder): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgCancelOrder", value: MsgCancelOrder.fromPartial( data ) }),
    msgRedeemDrop: (data: MsgRedeemDrop): EncodeObject => ({ typeUrl: "/pendulumlabs.denomoney.denomoney.MsgRedeemDrop", value: MsgRedeemDrop.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
