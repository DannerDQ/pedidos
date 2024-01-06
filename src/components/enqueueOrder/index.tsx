"use client"

import { OrderList } from "@context/orders";
import { useContext } from "react";
import styles from "./styles.module.css"

export default function EnqueueOrder(){
    const {addOrder, currentOrder} = useContext(OrderList)
    
    return (
      <section className={styles.enqueue}>
        <button onClick={() => addOrder(currentOrder)} disabled={currentOrder.size === 0}>
          Añadir Pedido
        </button>
      </section>
    );
}