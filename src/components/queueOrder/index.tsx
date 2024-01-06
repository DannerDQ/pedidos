"use client"

import { OrderList } from "@context/orders";
import { QueueOrder } from "@types";
import { useContext } from "react";

export default function QueueOrder({order: {order, delivered}, id}:{order:QueueOrder, id: string}) {
  const {updateQueueOrder, cancelOrder} = useContext(OrderList)  
  let total = 0;
    
    return (
      <li>
        <h2>Pedido: </h2>
        {(() => {
          const productList = Array.from(order, ([key, product]) => {return {product, key}})
          
          return (
            <>
              {
                productList.map(({product: {count, price}, key}, i) => {
                  const subTotal = price * count

                  total += subTotal
                  return (
                    <h3 key={`${id}-${i}`}>
                      • {key} - x{count}
                    </h3>
                  );
                })
              }
            </>
          );
        })()}
        <div>
          <h4>total:</h4>
          <span>S/. {total.toFixed(2)}</span>
        </div>
        <div>
          <button onClick={() => cancelOrder(id)}>cancelar</button>
          <button onClick={() => updateQueueOrder(id)}>entregar</button>
        </div>
      </li>
    );
}