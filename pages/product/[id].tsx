import { title } from "@/components/primitives";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/default";
import Carousel from "@/components/carousel";
import ProductInfo from "@/components/product-info";
import ProductSellerCard from "@/components/product-seller-card";
import { useProductContext } from "@/context/ProductContext";
import { User } from "@/types";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const { selectedProduct, products } = useProductContext();
  const [product, setProduct] = useState(selectedProduct);
  const [daysSincePublish, setDaysSincePublish] = useState("");
  const [owner, setOwner] = useState<User | null>(null);

  //mapping of condition from number to its string value
  const conditions = ["Nuevo", "Usado", "Como nuevo"];

  const fetchOwnerData = async (id: number) => {
    // fetch owner by id
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/users/${id}`);
    const data = await response.json();
    setOwner(data);
  };

  const calcSetDaysSincePublish = (publishDate: Date) => {
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - publishDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    setDaysSincePublish(
      `${differenceInDays == 0 ? "0" : differenceInDays.toString() + " días"}`
    );
  };

  useEffect(() => {
    let pathId = window.location.pathname.split("/")[2];
    if (!product) {
      const storedProduct = localStorage.getItem("selectedProduct");
      if (storedProduct) {
        let jsonStoredProduct = JSON.parse(storedProduct);
        if (!id && pathId !== jsonStoredProduct.id) {
          router.push("/");
        }
        setProduct(jsonStoredProduct);
        fetchOwnerData(jsonStoredProduct.userId);
        calcSetDaysSincePublish(new Date(jsonStoredProduct.publishDate));
      }
    } else {
      fetchOwnerData(product?.userId);
      calcSetDaysSincePublish(new Date(product.publishDate));
    }
  }, []);

  if (!product || daysSincePublish === null) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h2 className={title({ color: "blue" })}>
            {product.title.toUpperCase()}
          </h2>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-4">
        <div className="max-w-5xl w-full text-center items-center justify-between font-mono text-sm sm:mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Carousel images={product.images} />
          <div className="max-w-xl w-full justify-self-center">
            <ProductSellerCard owner={owner} />
            <ProductInfo
              price={product.price}
              location={product.location}
              published={daysSincePublish}
              condition={conditions[product.condition]}
              description={product.description}
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
