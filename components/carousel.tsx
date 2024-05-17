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
    <div className="w-full sm:w-[400px] md:w-[500px] relative mx-auto">
      <Card className="max-w-[600px] h-[200px] md:h-[300px] lg:h-[400px] mx-auto">
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
