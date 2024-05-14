import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { HeartIcon } from "./icons";

interface ProductCardProps {
  title: string;
  img: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, img, price }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <CardBody className="relative p-0">
        <Image
          shadow="sm"
          radius="none"
          width="100%"
          alt={title}
          className="w-full object-cover h-[200px] relative z-0"
          src={img}
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
        <b>{title}</b>
        <p className="text-default-500">{price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
