import { UUID } from "crypto";
import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

export type Variant = {
  name: string;
  description?: string;
  free: boolean;
  price: number;
  value: string;
};

export type Food = {
  name: string;
  description?: string;
  free: boolean;
  img: StaticImageData;
  price: number | null;
  variants: Variant[];
  value?: string
};


export type Menu = {
  dishes: Dish[],
  drinks: Drink[]
}

export type Dish = Food
export type Drink = Food;

export type Product = {
  count: number
  price: number
}

export type preProduct = {
  key: string,
  price: number,
}
export type Order = Map<string, Product>;
export type OrderState = [Order, Dispatch<SetStateAction<Order>>];

export type QueueOrder = {
  order: Order,
  delivered: boolean
}

export type OrderCollection = Map<string, QueueOrder>;
export type OrderCollectionState = [OrderCollection, Dispatch<SetStateAction<OrderCollection>>];

export type CommonOrderSetter = Dispatch<SetStateAction<Food>>;
export type CommonOrderState = [Food, CommonOrderSetter];

export type VariantOrderSetter = Dispatch<SetStateAction<Variant>>;
export type VariantOrderState = [Variant, VariantOrderSetter];
