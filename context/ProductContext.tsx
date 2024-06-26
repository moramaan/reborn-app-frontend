import React, { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "@/types";

interface ProductContextProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, selectedProduct, setSelectedProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
