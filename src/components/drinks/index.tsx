"use client";

import { Drinks } from "@context/menu";
import { useContext } from "react";
import FoodMenu from "@component/food";

export default function DrinksMenu() {
  const { drinks, setDrinks } = useContext(Drinks);

  return <FoodMenu menu={drinks ?? []} />;
}
