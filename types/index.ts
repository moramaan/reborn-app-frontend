import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Product {
  id: string;
  title: string;
  img: string;
  price: number;
  location: string;
  published: string;
  state: string;
  description: string;
  images: string[];
}