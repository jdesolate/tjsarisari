"use client"
import { Card, CardBody, Stack, Divider, CardFooter, Button, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useCart } from "app/context/CartContext";
import { Product } from "@/types/Product.type";

type ProductCardProps = {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, price, stock, image } = product;
  const { addToCart } = useCart();

  return (
    <Card maxW='sm'>
      <CardBody>
        {/* <Image
          src={image}
          alt={name}
          borderRadius='lg'
        /> */}
        <Stack mt='6' spacing='3'>
          <Text fontWeight={"bold"} size='xs'>{name}</Text>
          <Text color='red.600' fontSize='2xl'>
            ₱{price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <SimpleGrid columns={2} spacing={5} alignItems={"center"}>
          {/* <Text variant='ghost'>
            Stock: {stock}
          </Text> */}
          <Button variant='solid' onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </SimpleGrid>
      </CardFooter>
    </Card>
  );
}
