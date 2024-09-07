'use client';

import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import Draggable from "react-draggable";
import SwapForm from "./SwapForm";

export default function TradeWidget() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Trigger</Button>
            <Draggable>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    backdrop="transparent"
                    classNames={{
                        base: "rounded-[32px]"
                    }}
                >
                    <ModalContent>
                        <ModalHeader
                            className="flex flex-col items-start gap-2"
                        >
                            <h6 className="text-2xl semibold text-foreground-900">Swap</h6>
                            <p className="text-sm text-foreground-500">Instantly buy or sell tokens at superior prices</p>
                        </ModalHeader>
                        <ModalBody>
                            <SwapForm />
                        </ModalBody>
                        <ModalFooter>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Draggable>
        </>

    )
}