// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgdenomoneyOrder } from "./types/denomoney/tx";
import { MsgCreateOrder } from "./types/denomoney/tx";
import { MsgRedeemDrop } from "./types/denomoney/tx";
import { MsgCancelOrder } from "./types/denomoney/tx";
import { MsgCreatePool } from "./types/denomoney/tx";
import { MsgCreateDrop } from "./types/denomoney/tx";


const types = [
  ["/pendulum-labs.denomoney.denomoney.MsgdenomoneyOrder", MsgdenomoneyOrder],
  ["/pendulum-labs.denomoney.denomoney.MsgCreateOrder", MsgCreateOrder],
  ["/pendulum-labs.denomoney.denomoney.MsgRedeemDrop", MsgRedeemDrop],
  ["/pendulum-labs.denomoney.denomoney.MsgCancelOrder", MsgCancelOrder],
  ["/pendulum-labs.denomoney.denomoney.MsgCreatePool", MsgCreatePool],
  ["/pendulum-labs.denomoney.denomoney.MsgCreateDrop", MsgCreateDrop],
  
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
    msgdenomoneyOrder: (data: MsgdenomoneyOrder): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgdenomoneyOrder", value: MsgdenomoneyOrder.fromPartial( data ) }),
    msgCreateOrder: (data: MsgCreateOrder): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgCreateOrder", value: MsgCreateOrder.fromPartial( data ) }),
    msgRedeemDrop: (data: MsgRedeemDrop): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgRedeemDrop", value: MsgRedeemDrop.fromPartial( data ) }),
    msgCancelOrder: (data: MsgCancelOrder): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgCancelOrder", value: MsgCancelOrder.fromPartial( data ) }),
    msgCreatePool: (data: MsgCreatePool): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgCreatePool", value: MsgCreatePool.fromPartial( data ) }),
    msgCreateDrop: (data: MsgCreateDrop): EncodeObject => ({ typeUrl: "/pendulum-labs.denomoney.denomoney.MsgCreateDrop", value: MsgCreateDrop.fromPartial( data ) }),
    
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
