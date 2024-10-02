import {
  WalletSortingOptions,
  useWallet,
  groupAndSortWallets,
  AboutAptosConnect,
  AptosPrivacyPolicy,
  AnyAptosWallet,
  WalletItem,
  isInstallRequired,
  AboutAptosConnectEducationScreen,
} from "@aptos-labs/wallet-adapter-react";
import { Button } from "@nextui-org/button";
import { ModalContent, ModalHeader, ModalBody, Modal } from "@nextui-org/react";
import clsx from "clsx";
import { ArrowDown01Icon, MultiplicationSignIcon } from "hugeicons-react";
import React from "react";

import LogoIcon from "@/components/shared/icon/LogoIcon";

interface ConnectWalletDialogProps extends WalletSortingOptions {
  close: () => void;
}

function ConnectWalletDialog({
  close,
  ...walletSortingOptions
}: ConnectWalletDialogProps) {
  const { wallets = [] } = useWallet();

  const { aptosConnectWallets, availableWallets, installableWallets } =
    groupAndSortWallets(wallets, walletSortingOptions);

  const hasAptosConnectWallets = !!aptosConnectWallets.length;

  return (
    <ModalContent className="overflow-auto sm:m-0 shadow-none">
      <ModalHeader className="flex flex-col gap-2 items-center">
        <LogoIcon className="h-16 w-16 shadow-lg" />
        <h6 className="text-2xl text-foreground-900">Connect to Social</h6>
      </ModalHeader>
      <ModalBody className="overflow-auto rounded-[32px]">
        <AboutAptosConnect renderEducationScreen={renderEducationScreen}>
          {hasAptosConnectWallets && (
            <div className="flex flex-col gap-2 pt-3">
              <div className="relative flex flex-col gap-4 overflow-scroll max-h-72">
                {availableWallets.map((wallet) => (
                  <WalletRow
                    key={wallet.name}
                    wallet={wallet}
                    onConnect={close}
                  />
                ))}
                {installableWallets.map((wallet) => (
                  <WalletRow
                    key={wallet.name}
                    wallet={wallet}
                    onConnect={close}
                  />
                ))}
              </div>
              <p className="w-full text-center text-xs text-primary-400">
                Scroll for more wallets
              </p>
              <ArrowDown01Icon className="w-6 h-6 mx-auto text-primary-400" />

              <div className="flex items-center gap-3 pt-4 text-foreground-500">
                <div className="h-px w-full bg-foreground-500" />
                Or
                <div className="h-px w-full bg-foreground-500" />
              </div>
              {aptosConnectWallets.map((wallet) => (
                <AptosConnectWalletRow
                  key={wallet.name}
                  wallet={wallet}
                  onConnect={close}
                />
              ))}
              <p className="flex gap-1 justify-center items-center text-foreground-500 text-sm">
                Learn more about{" "}
                <AboutAptosConnect.Trigger className="flex gap-1 py-3 font-semibold items-center text-foreground">
                  Aptos Connect
                </AboutAptosConnect.Trigger>
              </p>
              <AptosPrivacyPolicy className="flex flex-col items-center py-1">
                <p className="text-xs text-foreground-500 leading-5">
                  <AptosPrivacyPolicy.Disclaimer />{" "}
                  <AptosPrivacyPolicy.Link className="text-muted-foreground underline underline-offset-4" />
                  <span className="text-muted-foreground">.</span>
                </p>
                <AptosPrivacyPolicy.PoweredBy className="flex gap-1.5 items-center text-xs leading-5 text-foreground-500" />
              </AptosPrivacyPolicy>
            </div>
          )}
        </AboutAptosConnect>
      </ModalBody>
    </ModalContent>
  );
}

interface WalletRowProps {
  wallet: AnyAptosWallet;
  onConnect?: () => void;
}

function WalletRow({ wallet, onConnect }: WalletRowProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleWalletItemClick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleWalletItemClick(); // Trigger click on "Enter" or "Space"
    }
  };

  return (
    <WalletItem wallet={wallet} onConnect={onConnect}>
      <div
        className="rounded-[20px] p-4 w-full cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={handleWalletItemClick}
        onKeyPress={handleKeyPress} // Adding keyboard listener
      >
        <div
          className={clsx(
            "flex items-center justify-between gap-4 text-foreground-900",
            "hover:scale-105 transition-transform duration-200 ease-in-out",
          )}
        >
          <WalletItem.Icon className="h-8 w-8 rounded-full" />
          <h6 className="w-full">{wallet.name}</h6>

          {isInstallRequired(wallet) ? (
            <Button>
              <WalletItem.InstallLink />
            </Button>
          ) : (
            <WalletItem.ConnectButton asChild>
              <Button>Connect</Button>
            </WalletItem.ConnectButton>
          )}
        </div>
      </div>
    </WalletItem>
  );
}

function AptosConnectWalletRow({ wallet, onConnect }: WalletRowProps) {
  return (
    <WalletItem wallet={wallet} onConnect={onConnect}>
      <WalletItem.ConnectButton asChild>
        <Button
          className="w-full gap-4 bg-foreground-100 text-foreground-900"
          size="lg"
          variant="solid"
        >
          <WalletItem.Icon className="h-5 w-5" />
          <WalletItem.Name className="text-base font-normal" />
        </Button>
      </WalletItem.ConnectButton>
    </WalletItem>
  );
}

function renderEducationScreen(screen: AboutAptosConnectEducationScreen) {
  return (
    <>
      <Modal className="grid grid-cols-[1fr_4fr_1fr] items-center space-y-0">
        <Button isIconOnly onClick={screen.cancel}>
          <MultiplicationSignIcon size={24} />
        </Button>
      </Modal>

      <div className="flex h-[162px] pb-3 items-end justify-center">
        <screen.Graphic />
      </div>
      <div className="flex flex-col gap-2 text-center pb-4">
        <screen.Title className="text-xl" />
        <screen.Description className="text-sm text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a]:text-foreground" />
      </div>

      <div className="grid grid-cols-3 items-center">
        <Button
          className="justify-self-start"
          size="sm"
          variant="solid"
          onClick={screen.back}
        >
          Back
        </Button>
        <div className="flex items-center gap-2 place-self-center">
          {screen.screenIndicators.map((ScreenIndicator, i) => (
            <ScreenIndicator key={i} className="py-4">
              <div className="h-0.5 w-6 transition-colors bg-muted [[data-active]>&]:bg-foreground" />
            </ScreenIndicator>
          ))}
        </div>
        <Button
          className="gap-2 justify-self-end"
          size="sm"
          variant="solid"
          onClick={screen.next}
        >
          {screen.screenIndex === screen.totalScreens - 1 ? "Finish" : "Next"}
        </Button>
      </div>
    </>
  );
}

export default ConnectWalletDialog;
