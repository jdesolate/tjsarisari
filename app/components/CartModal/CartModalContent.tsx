"use client"
import { Stat, StatLabel, StatNumber, StatHelpText, Divider, Text } from "@chakra-ui/react";
import { useCart } from "app/context/CartContext";

export default function CartContent() {
  const { cart, total } = useCart();

  return (
    <div>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          {cart.map((item) => (
            <Stat key={item.id} margin={5}>
              <StatLabel fontSize={"large"}>{item.name}</StatLabel>
              <StatHelpText>Quantity: {item.quantity}</StatHelpText>
              <StatNumber fontSize={"medium"}>₱{item.price} x {item.quantity}</StatNumber>
            </Stat>
          ))}
        </>
      )}
      <Divider marginY={2} />
      <Text>Total: ₱{total}</Text>
    </div>
  );
}
