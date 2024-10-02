import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";

import { appConfig } from "@/config";

const aptos = new Aptos(
  new AptosConfig({ network: appConfig.constants.NETWORK }),
);

export function aptosClient() {
  return aptos;
}
