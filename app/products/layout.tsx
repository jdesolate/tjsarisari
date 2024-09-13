"use client"
import { Button, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { CartProvider, useCart } from "../context/CartContext";
import "../global.css";

import React from 'react'
import CartModal from "../components/CartModal/CartModal";
import CartContent from "../components/CartModal/CartModalContent";

export default function ProductsLayout({ children }: {
  children: React.ReactNode
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openCartDrawer = () => {
    onOpen();
  }
  const closeCartDrawer = () => {
    onClose();
  }

  const clearCartDrawer = () => {
    //clear cart content
  }

  return (
    <CartProvider>
      <SimpleGrid columns={2} spacing={5}>
        <Heading>
          Product Listings
        </Heading>
        <Button onClick={openCartDrawer} variant={"solid"} >
          View Cart
        </Button>
      </SimpleGrid>
      {children}
      <CartModal isOpen={isOpen} onClose={closeCartDrawer} onClear={clearCartDrawer}>
        <CartContent />
      </CartModal>
    </CartProvider>
  )
}
