import { UUID } from "crypto";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Option {
  value: string;
  label: string;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  showPhone: boolean;
  profileDescription: string;
  state: string; // Cataluña, Andalucia, etc
  city: string; // Barcelona, Madrid, etc
  // profileImageUrl: string; TODO: Add profile image
}

export interface Product {
  id: UUID; //uuid - string
  userId: number;
  title: string;
  description: string;
  price: number;
  location: string;
  state: string; // available, reserved, sold
  condition: number; // new, used, as new | comes as 0, 1 or 2 in this order
  publishDate: Date;
  images: string[];
}


