"use client"

import { Dish, Drink, Menu as MenuType } from "@types";
import { Context, Dispatch,ReactNode, SetStateAction, createContext, useEffect, useState } from "react";
import mixto from "@public/mixto.jpg"
import broaster from "@public/broaster.jpg"
import salchipapa from "@public/salchipapa.jpg";
import triple from "@public/triple.jpg";
import combinado from "@public/combinado.jpg"
import maracuya from "@public/maracuya.jpg"
import cafe from "@public/cafe.jpg"
import papaya from "@public/papaya.jpg"
import te from "@public/te.jpg"

export const Drinks: Context<{
  drinks?: Drink[];
  setDrinks?: Dispatch<SetStateAction<Drink[]>>;
}> = createContext({});

export const Dishes: Context<{
  dishes?: Dish[];
  setDishes?: Dispatch<SetStateAction<Dish[]>>;
}> = createContext({});


const dishes: Dish[] = [
  {
    name: "combinado",
    img: combinado,
    description: "broaster, papas, chaufa",
    price: 11.0,
    variants: [],
    free: true,
  },
  {
    name: "salchipapa",
    img: salchipapa,
    description: "papa, hotdog",
    price: 10.0,
    variants: [],
    free: true,
  },
  {
    name: "broaster",
    img: broaster,
    description: "papa, pollo",
    price: 10.0,
    variants: [],
    free: true,
  },
  {
    name: "mixto",
    img: mixto,
    description: "papa, hotdog, broaster",
    price: 11.0,
    variants: [],
    free: true,
  },
  {
    name: "triple",
    img: triple,
    description: "chaufa, papa, huevo o hot dog, broaster",
    price: null,
    variants: [
      {
        name: "huevo",
        price: 13,
        free: true
      },
      {
        name: "hot dog",
        price: 13,
        free: true
      }
    ],
    free: true,
  },
];
const drinks: Drink[] = [
  {
    name: "refresco de maracuyá",
    img: maracuya,
    price: null,
    variants: [
      {
        name: "1 litro",
        price: 8,
        free: true,
      },
      {
        name: "1/2 litro",
        price: 4,
        free: true,
      },
      {
        name: "1 vaso",
        price: 2,
        free: true,
      },
    ],
    free: true,
  },
  {
    name: "jugo de papaya",
    img: papaya,
    price: 4,
    variants: [],
    free: true,
  },
  {
    name: "café",
    img: cafe,
    price: 2,
    variants: [],
    free: true,
  },
  {
    name: "té",
    img: te,
    price: null,
    variants: [
      {
        name: "manzanilla",
        price: 2,
        free: true,
      },
      {
        name: "anís",
        price: 2,
        free: true,
      },
    ],
    free: true,
  },
];

export function DishesProvider({ children }: { children: ReactNode }) {
  const [dishesMenu, setDishes] = useState(dishes);

  useEffect(() => {
    const storageDishes = localStorage.getItem("dishes");
    if (!storageDishes) {
      localStorage.setItem("dishes", JSON.stringify(dishes));
    } else {
      setDishes(JSON.parse(storageDishes));
    }
  }, []);

  return (
    <Dishes.Provider value={{ dishes: dishesMenu, setDishes }}>
      {children}
    </Dishes.Provider>
  );
}

export function DrinksProvider({ children }: { children: ReactNode }) {
  const [drinksMenu, setDrinks] = useState(drinks);

  useEffect(() => {
    const storageDrinks = localStorage.getItem("drinks");

    if (!storageDrinks) {
      localStorage.setItem("drinks", JSON.stringify(drinks));
    } else {
      setDrinks(JSON.parse(storageDrinks));
    }
  }, []);

  return <Drinks.Provider value={{ drinks: drinksMenu, setDrinks }}>{children}</Drinks.Provider>;
}