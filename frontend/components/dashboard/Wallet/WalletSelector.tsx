"use client";

import {
  WalletSortingOptions,
  useWallet,
} from "@aptos-labs/wallet-adapter-react";
import { Modal, useDisclosure } from "@nextui-org/react";
import React from "react";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";
import dynamic from "next/dynamic";

const DynamicConnectWalletDialog = dynamic(
  () => import("./ConnectWalletDialog"),
);

export function WalletSelector(walletSortingOptions: WalletSortingOptions) {
  const { isOpen, onOpenChange, onClose, onOpen } = useDisclosure();
  const { connected, wallet } = useWallet();

  const handleNotify = React.useCallback(() => {
    if (connected) {
      toast.success(`Connected to ${wallet?.name} successfully!`);
    }
  }, [connected, wallet]);

  React.useEffect(() => {
    handleNotify();
  }, [handleNotify]);

  return (
    <>
      <Button fullWidth color="primary" onClick={onOpen}>
        Connect Wallet
      </Button>
      <Modal
        hideCloseButton
        backdrop="opaque"
        className="rounded-[24px] relative"
        isOpen={isOpen}
        radius="lg"
        size="md"
        onOpenChange={onOpenChange}
      >
        <DynamicConnectWalletDialog close={onClose} {...walletSortingOptions} />
      </Modal>
    </>
  );
}

export default WalletSelector;
