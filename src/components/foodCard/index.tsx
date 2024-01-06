"use client"

import Image from "next/image";
import { CommonOrderState, Food, OrderState, Variant, VariantOrderSetter, VariantOrderState, preProduct } from "@types";
import styles from "./styles.module.css"
import FoodVariant from "@component/foodVariant";
import blank from "@public/blank.png"
import { Add, Available, Delete, Edit, NotAvailable } from "@icons";
import { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import { OrderList } from "@context/orders";

export default function FoodCard({food}:{food: Food}){
  const initialVariant: Variant = {
    name: "",
    free: false,
    price: 0,
    value: ""
  }
  const { addProduct } = useContext(OrderList)
  const add: MutableRefObject<null | HTMLButtonElement> = useRef(null)
  const [principal, setPrincipal]:CommonOrderState = useState(food)
  const [variant, setVariant]:VariantOrderState = useState(initialVariant)

  const handleClick = () => {
    if (food.price){
      if (!food.free) alert(`${food.value ?? food.name} no se encuentra disponible.`)
      addProduct({ key: food.name, price: food.price });
      return 
    }

    if (!variant.free) {
      alert(`${variant.value} no se encuentra disponible.`);
      return
    }
    addProduct({
      key: variant.value,
      price: variant.price,
    });
  };

  useEffect(()=> {
    if (food.variants.length !== 0 && add.current){
      add.current.disabled = variant.value.length === 0; 
    } 
  }, [variant, food])

  return (
    <li className={styles.card}>
      <Image src={food.img} alt={food.name} className={styles.card_image} />
      <div className={styles.card_body}>
        <h3 className={styles.title}>{food.name} 
          {
            food.free ? <Available/> : <NotAvailable/>
          }
        </h3>
        {food.variants ? (
          <ul className={styles.variants}>
            {food.variants.map((variant) => {
              return (
                <FoodVariant
                  variant={variant}
                  group={food.name}
                  setOrder={setVariant}
                  key={variant.name}
                />
              );
            })}
          </ul>
        ) : null}
        {food.price ? <span>Precio: S/ {food.price.toFixed(2)}</span> : null}
      </div>
      <div className={styles.card_footer}>
        <button>
          <Edit/>
        </button>
        <button ref={add} onClick={handleClick} disabled={!food.free}>
          <Add/>
        </button>
      </div>
    </li>
  );
}