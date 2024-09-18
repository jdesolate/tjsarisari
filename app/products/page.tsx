"use client"
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, Text, VStack, useBreakpointValue, Grid, GridItem, useToast, HStack, Input, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "@/types/Product.type";

type Cart = {
  id: string;
  product: Product;
  quantity: number;
}

export default function Page() {
  const [cart, setCart] = useState<Cart[]>([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const toast = useToast();

  useEffect(() => {
    async function fetchProducts() {
      const productList = await getProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: product.id, product: product, quantity: 1 }];
      }
    });
    setTotal((prevTotal) => prevTotal + product.price);

    toast({
      title: `Added item to cart (See computation below)`,
      position: "top",
      status: "success",
      duration: 1500,
      isClosable: true,
    })
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          // Remove the product from the cart if the quantity is 1
          return prevCart.filter((item) => item.id !== product.id);
        } else {
          // Decrease the product quantity
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      return prevCart; // Return the same cart if the product isn't found
    });
    setTotal((prevTotal) => prevTotal - product.price);

    toast({
      title: `Removed item from cart`,
      position: "top",
      status: "error",
      duration: 1500,
      isClosable: true,
    })
  };

  const clearCart = () => {
    setCart([]); // Reset the cart to an empty array
    setTotal(0);  // Reset the total to 0

    toast({
      title: `Cleared all items in cart`,
      position: "top",
      status: "error",
      duration: 1500,
      isClosable: true,
    })
  };

  const headingFontSize = useBreakpointValue({ base: "lg", md: "xl" });
  const tableFontSize = useBreakpointValue({ base: "xs", md: "sm" });
  const buttonSize = useBreakpointValue({ base: "xs", md: "sm" });

  return (
    <Grid
      templateColumns={{ base: "1fr" }} // One column for mobile, 2 columns for larger screens
      gap={6}
      maxW="1200px"
      mx="auto"
    >
      <GridItem>
        <Box>
          <Text fontSize={headingFontSize} mb={4} fontWeight="bold">
            Product List
          </Text>
          <Text fontSize="md" mb={4}>
            Use the search bar to find products. Add items to your cart to see the total price updated below.
          </Text>
          <Input
            placeholder="Search for a product name..."
            colorScheme="red"
            mb={4}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)
            }
          />

          {/* Responsive Table */}
          <Box overflowX="auto">
            <Table colorScheme="red" size={tableFontSize} variant={"unstyled"}>
              <Thead>
                <Tr>
                  <Th>Product Name</Th>
                  <Th>Price</Th>
                  <Th>Add to Cart</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td
                      style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
                    >{product.name.toUpperCase()}</Td>
                    <Td>{product.price} PHP</Td>
                    <Td>
                      <Button
                        size={buttonSize}
                        colorScheme="yellow"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </Td>
                  </Tr>
                )) :
                  <Stack mt={5}>
                    <Text my={2} fontWeight={"bold"}>No available products. Please check again soon.</Text>
                  </Stack>

                }
              </Tbody>
            </Table>
          </Box>
        </Box>
      </GridItem>

      {/* Cart Section (Will be on the right on larger screens) */}
      <GridItem>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Text fontSize={headingFontSize} mb={2} fontWeight={"bold"}>
            Items in Cart:
          </Text>

          {/* Responsive Cart Items */}
          <VStack align="stretch" spacing={2}>
            {cart.length > 0 ? (
              cart.map((item) => (
                <Box
                  key={item.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  display="flex"
                  justifyContent="space-between"
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Text>
                    {item.product.name.toUpperCase()} (x{item.quantity})
                  </Text>
                  <Text>{item.product.price * item.quantity} PHP</Text>
                  <Button
                    size={buttonSize}
                    colorScheme="gray"
                    onClick={() => removeFromCart(item.product)}
                  >
                    Remove from Cart
                  </Button>
                </Box>
              ))
            ) : (
              <Stack alignItems={"center"}>
                <Text>No items in cart.</Text>
                <Text>Add to cart some products to see total price to pay.</Text>
              </Stack>
            )}
          </VStack>

          <HStack alignItems={"center"} justifyContent={"space-around"}>
            {/* Responsive Total Price */}
            <Text fontSize={headingFontSize} fontWeight="bold" mt={4}>
              Total Price to Pay: PHP {total.toFixed(2)}
            </Text>

            {/* Clear Cart Button */}
            {cart.length > 0 && (
              <Button
                colorScheme="red"
                mt={4}
                onClick={clearCart} // Call clearCart function
              >
                Clear Cart
              </Button>
            )}
          </HStack>
        </Box>
      </GridItem>
    </Grid>
  );
}
