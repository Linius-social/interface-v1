"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { AccountAddress } from "@aptos-labs/ts-sdk";

import Area from "./Area";

import {
  accountProtocolBalance,
  accountStakedAmount,
} from "@/view-functions/accountBalance";
import { SOCIAL_ADDRESS } from "@/config/constants";

interface ProtocolProps extends React.HTMLAttributes<HTMLDivElement> {}

function Protocol(props: ProtocolProps) {
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0); // Replace with your token balance
  const [isStaked, setIsStaked] = useState<boolean>(false);
  const wallet = useWallet();

  useEffect(() => {
    const fetchBalance = async () => {
      if (!wallet.account?.address) return;
      const balance = await accountProtocolBalance({
        accountAddress: AccountAddress.fromString(wallet.account.address),
      });

      setBalance(balance / 10 ** 8); // Convert the balance to the correct decimal
    };

    fetchBalance();
  }, [wallet.account?.address]);

  useEffect(() => {
    const fetchStaked = async () => {
      if (!wallet.account?.address) return;
      const stakedBalance = await accountStakedAmount({
        accountAddress: AccountAddress.fromString(wallet.account.address),
      });

      if (stakedBalance > 0) {
        setIsStaked(true);
      }
    };

    fetchStaked();
  }, [balance]);

  const handleStake = async (event: React.FormEvent) => {
    event.preventDefault();
    // Add your staking logic here
    await wallet.signAndSubmitTransaction({
      data: {
        function: `${SOCIAL_ADDRESS}::social::first_time_stake_native`,
        functionArguments: ["user_name", stakeAmount * 10 ** 8, 0],
      },
    });
  };

  const handlePercentage = (percentage: number) => {
    setStakeAmount((balance * percentage) / 100);
  };

  return (
    <Area
      description="Stake protocol tokens to unlock exclusive features and rewards."
      title="Stake Protocol Tokens"
    >
      <form
        className="flex flex-col items-center justify-center gap-4 rounded-lg w-full text-white"
        onSubmit={handleStake}
      >
        <div className="flex flex-row justify-between items-center w-full p-2 rounded-md">
          <div className="flex items-center">
            <img
              alt="Token"
              className="w-6 h-6 mr-2"
              src="/logo-app.png" // Replace with your token icon path
            />
            <span className="font-semibold text-gray-200">Protocol Token</span>
          </div>
          <div className="text-sm text-gray-400">
            Balance: <span className="font-semibold">{balance}</span>
          </div>
        </div>

        <Input
          fullWidth
          className="p-2 text-lg rounded-md"
          min={0}
          placeholder="Enter amount to stake"
          step="any" // Allows fractional inputs
          type="number"
          value={stakeAmount.toString()} // Convert the number to a string
          onChange={(e) => setStakeAmount(parseFloat(e.target.value))}
        />

        <div className="flex justify-between w-full mt-2 flex-wrap gap-2">
          <Button
            className="px-2 py-1 text-sm"
            onClick={() => handlePercentage(25)}
          >
            25%
          </Button>
          <Button
            className="px-2 py-1 text-sm"
            onClick={() => handlePercentage(50)}
          >
            50%
          </Button>
          <Button
            className="px-2 py-1 text-sm"
            onClick={() => handlePercentage(75)}
          >
            75%
          </Button>
          <Button
            className="px-2 py-1 text-sm"
            onClick={() => handlePercentage(100)}
          >
            Max
          </Button>
        </div>

        <Button
          className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          color="primary"
          type="submit"
        >
          Stake
        </Button>

        {isStaked && (
          <div className="mt-4 text-center text-green-500">
            You are KOL now 🚀
          </div>
        )}
      </form>
    </Area>
  );
}

export default dynamic(() => Promise.resolve(Protocol));
