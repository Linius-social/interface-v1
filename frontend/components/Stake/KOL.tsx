"use client";

import { Button, Select, SelectItem } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Input } from "@nextui-org/input";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";

import Area from "./Area";

import { API_URL, SOCIAL_ADDRESS } from "@/config/constants";
import { accountKolBalance } from "@/view-functions/accountBalance";

interface KOLProps extends React.HTMLAttributes<HTMLDivElement> { }

export type KOL = {
  user_address: string;
  amount: number;
};

function KOL(props: KOLProps) {
  const [kolAddress, setKolAddress] = useState<string>(""); // Store KOL address or selected KOL
  const [selectedOption, setSelectedOption] = useState<string>(""); // Store selected option (KOL or manual input)
  const [stakeAmount, setStakeAmount] = useState<number>(0); // Store the amount to stake
  const [kolList, setKolList] = useState<KOL[]>([]); // Store the list of KOL addresses
  const [balance, setBalance] = useState<number>(0); // Store the balance of the user
  const wallet = useWallet();

  useEffect(() => {
    const fetchKOLList = async () => {
      const url = API_URL + "/api/v1/kols/get_all";

      const res = await axios.get<KOL[]>(url);

      setKolList(res.data);
    };

    fetchKOLList();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!wallet.account) return;
      if (!kolAddress) return;
      console.log("Fetching balance for KOL address: ", kolAddress);
      const res = await accountKolBalance({
        accountAddress: AccountAddress.fromString(wallet.account.address),
        kolAddress: AccountAddress.fromString(kolAddress),
      });

      setBalance(res);
    };

    fetchBalance();
  }, [kolAddress]);

  const handleStake = async (event: React.FormEvent) => {
    event.preventDefault();
    await wallet.signAndSubmitTransaction({
      data: {
        function: `${SOCIAL_ADDRESS}::social::register_kol`,
        functionArguments: [kolAddress, stakeAmount],
      },
    });
  };

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    if (value !== "") {
      setKolAddress(value); // Set KOL address only if it's a predefined KOL
    } else {
      setKolAddress(""); // Clear the address for manual typing
    }
  };

  const handlePercentage = (percentage: number) => {
    if (balance > 0) {
      setStakeAmount(balance * percentage);
    }
  };

  return (
    <Area
      description="Stake KOL tokens for private group access and premium insights."
      title="Stake KOL Tokens"
    >
      <form
        className="flex flex-col items-center justify-center gap-4 rounded-md  w-full text-white"
        onSubmit={handleStake}
      >
        <div className="text-sm text-gray-400 w-full text-end">
          Balance: <span className="font-semibold">{balance / 10 ** 8}</span>{" "}
          KOL Tokens
        </div>
        {/* Select KOL Address */}
        <Select
          fullWidth
          placeholder="Select KOL or Type Address"
          onChange={(e) => handleSelectChange(e.target.value)} // Correct event handling
        >
          {kolList.map((kol: KOL) => (
            <SelectItem key={kol.user_address} value={kol.user_address}>
              {kol.user_address}
            </SelectItem>
          ))}
        </Select>

        {/* Input for typing the KOL address manually */}
        {selectedOption === "" && (
          <Input
            fullWidth
            placeholder="Type KOL Address"
            type="text"
            variant="flat"
            onChange={(e) => setKolAddress(e.target.value)}
          />
        )}

        {/* Show KOL Token Balance */}

        {/* Enter Amount to Stake */}
        <Input
          fullWidth
          className="text-white"
          min={0}
          placeholder="Enter Amount to Stake"
          type="number"
          value={(stakeAmount / 10 ** 8).toString()} // Ensure value is always a string
          onChange={(e) => setStakeAmount(parseInt(e.target.value))}
        />

        {/* Percentage buttons */}
        <div className="flex justify-between w-full mt-2 flex-wrap gap-2">
          <Button
            onClick={() => handlePercentage(0.25)}
          >
            25%
          </Button>
          <Button
            onClick={() => handlePercentage(0.5)}
          >
            50%
          </Button>
          <Button
            onClick={() => handlePercentage(0.75)}
          >
            75%
          </Button>
          <Button
            onClick={() => handlePercentage(1)}
          >
            Max
          </Button>
        </div>

        {/* Stake Button */}
        <Button
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          color="primary"
          type="submit"
        >
          Stake
        </Button>
      </form>
    </Area>
  );
}

export default dynamic(() => Promise.resolve(KOL));
