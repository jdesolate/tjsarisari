"use client"
import { getDocs } from "firebase/firestore";
import { productsRef } from "../../firebase/firebaseConfig";
import { Product } from "@/types/Product.type";
import { SampleProducts } from "../../constants/Products.constant";

export const getProducts = async (): Promise<Product[]> => {
  // const productSnapshot = await getDocs(productsRef);
  // const productList = productSnapshot.docs.map((doc) => ({
  //   id: doc.id,
  //   ...doc.data(),
  // })) as Product[];

  return SampleProducts;
};
