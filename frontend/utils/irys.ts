import { WebIrys } from "@irys/sdk";
import { WalletContextState } from "@aptos-labs/wallet-adapter-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";

import { accountAPTBalance } from "@/view-functions/accountBalance";

const getWebIrys = async (aptosWallet: WalletContextState) => {
  const network = "devnet"; // Irys network
  const token = "aptos";
  const rpcUrl = "testnet"; // Aptos network "mainnet" || "testnet"
  const wallet = { rpcUrl: rpcUrl, name: "aptos", provider: aptosWallet };
  const webIrys = new WebIrys({ network, token, wallet });

  await webIrys.ready();

  return webIrys;
};

export const checkIfFund = async (
  aptosWallet: WalletContextState,
  files: File[],
) => {
  // 1. estimate the gas cost based on the data size https://docs.irys.xyz/developer-docs/irys-sdk/api/getPrice
  const webIrys = await getWebIrys(aptosWallet);
  const costToUpload = await webIrys.utils.estimateFolderPrice(
    files.map((f) => f.size),
  );
  // 2. check the wallet balance on the irys node: irys.getLoadedBalance()
  const irysBalance = await webIrys.getLoadedBalance();

  // 3. if balance is enough, then upload without funding
  if (irysBalance.toNumber() > costToUpload.toNumber()) {
    return true;
  }
  // 4. if balance is not enough,  check the payer balance
  const currentAccountAddress = await aptosWallet.account!.address;

  const currentAccountBalance = await accountAPTBalance({
    accountAddress: AccountAddress.fromString(currentAccountAddress),
  });

  // 5. if payer balance > the amount based on the estimation, fund the irys node irys.fund, then upload
  if (currentAccountBalance > costToUpload.toNumber()) {
    try {
      await fundNode(aptosWallet, costToUpload.toNumber());

      return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(`Error funding node ${error}`);
    }
  }

  // 6. if payer balance < the amount, replenish the payer balance*/
  return false;
};

export const fundNode = async (
  aptosWallet: WalletContextState,
  amount?: number,
) => {
  const webIrys = await getWebIrys(aptosWallet);

  try {
    const fundTx = await webIrys.fund(amount ?? 1000000);

    return true;
  } catch (e) {
    throw new Error(`Error uploading data ${e}`);
  }
};

export const uploadFile = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aptosWallet: any,
  fileToUpload: File,
): Promise<string> => {
  const webIrys = await getWebIrys(aptosWallet);

  try {
    const receipt = await webIrys.uploadFile(fileToUpload, { tags: [] });

    return `https://gateway.irys.xyz/${receipt.id}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(`Error uploading file ${e}`);
  }
};

export const uploadFolder = async (
  aptosWallet: WalletContextState,
  files: File[],
): Promise<string[]> => {
  const webIrys = await getWebIrys(aptosWallet);

  try {
    const receipt = await webIrys.uploadFolder(files); //returns the manifest ID

    const paths = receipt.manifest.paths;

    const uris: string[] = [];

    for (const key1 in paths) {
      const level1 = paths[key1];

      for (const key2 in level1) {
        const level2 = level1[key2];

        if (typeof level2 == "string") {
          uris.push(level2);
        } else if (typeof level2 == "object" && level2.id) {
          uris.push(level2.id);
        } else {
          throw new Error("Error uploading folder");
        }
      }
    }

    return uris;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    throw new Error(`Error uploading folder ${e}`);
  }
};
