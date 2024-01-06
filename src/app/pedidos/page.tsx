"use client"

import QueueOrder from "@component/queueOrder"
import { OrderList } from "@context/orders"
import { ReactNode, useContext } from "react"
import styles from "./styles.module.css"

export default function Pedidos(){
    const {queueOrders, updateQueueOrder} = useContext(OrderList)

    const renderQueue = ()=> {
        const nodeList: Array<ReactNode> = []

        queueOrders.forEach((queueOrder, key) => {
            nodeList.push(<QueueOrder order={queueOrder} id={key} key={key}/>)
        })

        return (
            <ul>
                {nodeList.map((node) => {
                    return node
                })}
            </ul>
        )
    }

    return (
      <main>
        <section className={styles.queue}>
          {queueOrders.size === 0 ? (
            <h3>Aún no hay pedidos en cola 🫤</h3>
          ) : (
            renderQueue()
          )}
        </section>
      </main>
    );
}