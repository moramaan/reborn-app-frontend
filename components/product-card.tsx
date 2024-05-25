import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { HeartIcon } from "./icons";
import { useProductContext } from "@/context/ProductContext";
import { Product } from "@/types";

const ProductCard: React.FC<Product> = ({ ...data }) => {
  const [liked, setLiked] = useState(false);
  const router = useRouter();
  const { setSelectedProduct } = useProductContext();

  const handleClick = () => {
    setSelectedProduct({ ...data });

    // Save product data to local storage
    localStorage.setItem("selectedProduct", JSON.stringify(data));

    router.push(`/product/${data.id}`);
  };

  return (
    <Card shadow="sm" isPressable onPress={handleClick}>
      <CardBody className="relative p-0">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={data.title}
          className="w-full object-cover h-[200px] relative z-0"
          src={data.images[0] ?? ""} //TODO: get a default image
        />
        <Button
          isIconOnly
          className="absolute top-2 right-2 text-default-900/60 bg-foreground/10 rounded-full z-10"
          onPress={() => setLiked((v) => !v)}
        >
          <HeartIcon
            className={liked ? "text-red-500" : ""}
            fill={liked ? "currentColor" : "none"}
          />
        </Button>
      </CardBody>
      <CardFooter className="text-small flex-col items-start gap-1">
        <b>{data.title}</b>
        <p className="text-default-500">{data.price}€</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
