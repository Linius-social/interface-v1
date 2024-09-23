"use client";
import { Select, SelectItem } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { Input } from "@nextui-org/input";
import React from "react";

import Area from "./Area";

interface KOLProps extends React.HTMLAttributes<HTMLDivElement> {}
function KOL(props: KOLProps) {
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
          placeholder="Name"
          type="text"
          variant="flat"
        />
        <Select fullWidth placeholder="Address">
          <SelectItem key={"example"} value="1">
            Type 1
          </SelectItem>
        </Select>
      </form>
    </Area>
  );
}

export default dynamic(() => Promise.resolve(KOL));
