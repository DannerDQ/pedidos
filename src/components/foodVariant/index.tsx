"use client"

import { Variant, VariantOrderSetter } from "@types";
import styles from "./styles.module.css"
import { Dispatch, MutableRefObject, SetStateAction, useRef } from "react";

export default function FoodVariant({variant, group, setOrder}:{variant: Variant, group: string, setOrder: VariantOrderSetter}){
  const self: MutableRefObject<null | HTMLInputElement> = useRef(null)
  
  const handleChange = ()=> {
    if (!(self.current && self.current.checked)) return
    setOrder(variant)
  };   
  
  return (
      <li className={styles.variant}>
        <label>
          <input onChange={handleChange} ref={self} type="radio" name={group} disabled={!variant.free} />
          <div>{variant.name}</div>
          <span>S/. {variant.price.toFixed(2)}</span>
        </label>
      </li>
    );
}