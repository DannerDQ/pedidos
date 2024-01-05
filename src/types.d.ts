import { UUID } from "crypto";
import { StaticImageData } from "next/image";

export type Variant = {
  name: string;
  description?: string;
  free: boolean;
  price: number;
};

export type Food = {
  name: string;
  description?: string;
  free: boolean;
  img: StaticImageData;
  price: number | null;
  variants: Variant[];
};


export type Menu = {
  dishes: Dish[],
  drinks: Drink[]
}

export type Dish = Food
export type Drink = Food;

export type Product = Food & {
  id: UUID
}