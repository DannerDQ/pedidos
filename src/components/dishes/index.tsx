"use client"

import { Dishes } from "@context/menu";
import { ReactNode, useContext } from "react";
import FoodMenu from "@component/food";

export default function DishesMenu(){
  const {dishes, setDishes} = useContext(Dishes)

  return <FoodMenu menu={dishes??[]}/>
}