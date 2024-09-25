"use client";

import dynamic from "next/dynamic";
import React from "react";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";

import Area from "./Area";

interface ProtocolProps extends React.HTMLAttributes<HTMLDivElement> {}
function Protocol(props: ProtocolProps) {
  return (
    <Area
      description="Stake KOL tokens for private group access"
      title="Project"
    >
      <form
        action=""
        className="flex flex-row items-center justify-center gap-4"
      >
        <Input
          fullWidth
          color="primary"
          placeholder="Select Protocol"
          type="text"
          variant="flat"
        />
        <Select fullWidth placeholder="Amount">
          <SelectItem key={"example"} value="1">
            Type 1
          </SelectItem>
        </Select>
      </form>
    </Area>
  );
}
export default dynamic(() => Promise.resolve(Protocol));
