"use client"
import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Product } from "@/types/Product.type";

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productList = await getProducts();
      setProducts(productList);
    }
    fetchProducts();
  }, []);


  return (
    <SimpleGrid columns={2} spacing={10} marginY={10}>
      {products.length === 0 ? (
        <p>Your don't have available products</p>
      ) : products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
}
