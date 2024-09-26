import { AccountAddress, createObjectAddress } from "@aptos-labs/ts-sdk";

import { METADATA_OBJECT_ADDRESS, SOCIAL_ADDRESS } from "@/config/constants";
import { aptosClient } from "@/utils/aptosClient";

export const accountAPTBalance = async ({
  accountAddress,
}: {
  accountAddress: AccountAddress;
}): Promise<number> => {
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: "0x1::coin::balance",
      typeArguments: ["0x1::aptos_coin::AptosCoin"],
      functionArguments: [accountAddress],
    },
  });

  return balance[0];
};

export const accountProtocolBalance = async ({
  accountAddress,
}: {
  accountAddress: AccountAddress;
}): Promise<number> => {
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: "0x1::primary_fungible_store::balance",
      typeArguments: ["0x1::fungible_asset::Metadata"],
      functionArguments: [accountAddress, METADATA_OBJECT_ADDRESS],
    },
  });

  return balance[0];
};

export const accountStakedAmount = async ({
  accountAddress,
}: {
  accountAddress: AccountAddress;
}): Promise<number> => {
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: `${SOCIAL_ADDRESS}::social::get_protocol_stake_amount`,
      functionArguments: [accountAddress],
    },
  });

  return balance[0];
};

export const accountKolBalance = async ({
  accountAddress,
  kolAddress,
}: {
  accountAddress: AccountAddress;
  kolAddress: AccountAddress;
}): Promise<number> => {
  const metadataAddress = createObjectAddress(kolAddress, "social");
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: `0x1::primary_fungible_store::balance`,
      functionArguments: [accountAddress, metadataAddress],
      typeArguments: ["0x1::fungible_asset::Metadata"],
    },
  });

  return balance[0];
};

export const accountStakedKolAmount = async ({
  accountAddress,
  kolAddress,
}: {
  accountAddress: AccountAddress;
  kolAddress: AccountAddress;
}): Promise<number> => {
  const balance = await aptosClient().view<[number]>({
    payload: {
      function: `${SOCIAL_ADDRESS}::social::get_kol_stake_amount`,
      functionArguments: [accountAddress, kolAddress],
    },
  });

  return balance[0];
};
