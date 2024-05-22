import React, { useState, useEffect } from "react";
import { Card, Image, Button } from "@nextui-org/react";
import { LeftArrow, RightArrow } from "./icons";
import Swipe from "react-easy-swipe";

interface CarouselProps {
  images: string[];
}

const defaultImages: string[] = [
  "https://nextui.org/images/card-example-4.jpeg",
  "https://nextui.org/images/card-example-3.jpeg",
  "https://nextui.org/images/card-example-2.jpeg",
];

const Carousel: React.FC<CarouselProps> = ({ images: initialImages }) => {
  const [images, setImages] = useState<string[]>(initialImages.length > 0 ? initialImages : defaultImages);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (initialImages.length === 0) {
      setImages(defaultImages);
    } else {
      setImages(initialImages);
    }
  }, [initialImages]);

  return (
    <div className="w-full sm:w-[400px] md:w-[574px] lg:w-[500px] relative mx-auto">
      <Card className="max-w-[600px] h-[200px] md:h-[300px] lg:h-[400px] mx-auto">
        <Swipe
          onSwipeLeft={nextImage}
          onSwipeRight={prevImage}
          className="relative z-10 w-full h-full"
        >
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={images[currentIndex]}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <Button
              isIconOnly
              className="absolute top-1/2 transform -translate-y-1/2 left-2 text-warning bg-foreground/30 rounded-full z-11"
              onClick={prevImage}
            >
              <LeftArrow />
            </Button>
            <Button
              isIconOnly
              className="absolute top-1/2 transform -translate-y-1/2 right-2 text-warning bg-foreground/30 rounded-full z-11"
              onClick={nextImage}
            >
              <RightArrow />
            </Button>
          </div>
        </Swipe>
      </Card>
    </div>
  );
};

export default Carousel;
