import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { LocationIcon } from "@/components/icons";

interface ProductInfoProps {
  price: number;
  location: string;
  published: string;
  state: string;
  description: string;
}

const defaultContent: string =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi soluta maiores reprehenderit ratione voluptatem officiis, repellendus ex quisquam error. Debitis vel itaque ex dolorem ab consequatur accusamus reiciendis nemo!";

const ProductInfo: React.FC<ProductInfoProps> = ({
  price = 500,
  location = "Barcelona, Cataluña",
  published = "2 días",
  state = "Nuevo",
  description = "",
}) => {
  return (
    <Card className="mt-2 h-[325px] px-2 py-2">
      <CardHeader className="flex flex-col items-start">
        <div className="flex flex-col items-start w-full">
          <div className="flex justify-between w-full">
            <h4 className="text-lg font-semibold">{price}€</h4>
            <div className="flex items-center">
              <LocationIcon />
              <span className="pt-1">{location}</span>
            </div>
          </div>
          <p className="text-sm text-default-600">Publicado hace {published}</p>
          <p className="text-sm text-default-700">{state}</p>
        </div>
      </CardHeader>
      <CardBody>
        <h5 className="text-lg font-semibold">Descripción</h5>
        <p>{description ? description : defaultContent}</p>
      </CardBody>
    </Card>
  );
};

export default ProductInfo;
