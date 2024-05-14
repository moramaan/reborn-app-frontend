import { useState, useEffect } from "react";
import ProductCard from "@/components/product-card";

interface Product {
  title: string;
  img: string;
  price: string;
}

interface ProductListProps {
  apiUrl: string;
}

function ProductList({ apiUrl }: ProductListProps) {
  const [productData, setProductData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const jsonData: Product[] = await response.json();
        setProductData(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [apiUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productData.map((data, index) => (
        <ProductCard key={index} {...data} />
      ))}
    </div>
  );
}

export default ProductList;
