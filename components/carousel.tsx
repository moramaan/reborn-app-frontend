import React, { useState } from "react";
import { Card, CardHeader, Image, Button } from "@nextui-org/react";
import { LeftArrow, RightArrow } from "./icons";

const images: string[] = [
  "https://nextui.org/images/card-example-4.jpeg",
  "https://nextui.org/images/card-example-3.jpeg",
  "https://nextui.org/images/card-example-2.jpeg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 relative">
      <Card className="col-span-12 sm:col-span-8 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={images[currentIndex]}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <Button
            isIconOnly
            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-warning bg-foreground/30 rounded-full z-1"
            onClick={prevImage}
          >
            <LeftArrow />
          </Button>
          <Button
            isIconOnly
            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-warning bg-foreground/30 rounded-full z-1"
            onClick={nextImage}
          >
            <RightArrow />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Carousel;
