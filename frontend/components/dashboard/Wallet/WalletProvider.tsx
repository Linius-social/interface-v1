import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PropsWithChildren } from "react";
import { OKXWallet } from "@okwallet/aptos-wallet-adapter";
import { Network } from "@aptos-labs/ts-sdk";

const wallets = [new OKXWallet()];

export const WalletProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <AptosWalletAdapterProvider
      autoConnect
      dappConfig={{
        network: Network.TESTNET,
      }}
      plugins={wallets}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
};
