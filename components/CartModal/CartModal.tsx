"use client"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
  children: React.ReactNode;
}

export default function CartModal({ isOpen, onClose, onClear, children }: ModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your Cart</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost' onClick={onClear}>Clear Cart</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
