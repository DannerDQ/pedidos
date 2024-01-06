"use client"

import { Order, OrderCollection, OrderCollectionState, OrderState, preProduct } from "@types";
import { Context, ReactNode, createContext, useState } from "react";

export const OrderList: Context<{
  addProduct: (param: preProduct) => void;
  addOrder: (param: Order) => void;
  updateQueueOrder: (id: string) => void;
  cancelOrder: (id: string) => void;
  currentOrder: Order;
  queueOrders: OrderCollection;
}> = createContext({
  addProduct(_) {},
  addOrder(_) {},
  updateQueueOrder(_) {},
  cancelOrder(id) {},
  currentOrder: new Map(),
  queueOrders: new Map(),
});

export default function OrderListProvider({ children }: { children: ReactNode }) {
  const [queueOrders, setQueueOrders]: OrderCollectionState = useState(new Map());
  const [currentOrder, setCurrentOrder]: OrderState = useState(new Map());

  const addProduct = ({ key, price }: preProduct) => {
    const orderCopy = new Map(currentOrder);
    const prod = orderCopy.get(key);

    if (prod) {
      prod.count += 1;
      orderCopy.set(key, prod);
    } else {
      orderCopy.set(key, {
        count: 1,
        price,
      });
    }

    setCurrentOrder(orderCopy);
  };

  const addOrder = (order: Order) => {
    const id = crypto.randomUUID();
    const ordersCopy = new Map(queueOrders);

    ordersCopy.set(id, {
      order,
      delivered: false,
    });

    setQueueOrders(ordersCopy);
    // TODO: Añadir notificación flotante de éxito
    clearOrder()
  };

  const clearOrder = () => {
    const currentOrderCopy = new Map(currentOrder)
    currentOrderCopy.clear() 
    
    setCurrentOrder(currentOrderCopy)
  }

  const updateQueueOrder = (id: string) => {
    const queueOrdersCopy = new Map(queueOrders);
    const queueOrder = queueOrdersCopy.get(id);

    if (queueOrder) {
      const date = new Date().getTime()
      const history = localStorage.getItem("history")
      
      queueOrder.delivered = true;
      const deliveredOrder = {
        date,
        order: queueOrder,
        id
      }
      
      if (!history) {
        localStorage.setItem("history", JSON.stringify([deliveredOrder]))
      }else {
        const parsedHistory = JSON.parse(history)

        parsedHistory.push(deliveredOrder)
        localStorage.setItem("history", JSON.stringify(parsedHistory))
      }
      
      queueOrdersCopy.delete(id)

      setQueueOrders(queueOrdersCopy)
    }
  }

  const cancelOrder = (id: string) => {
    const queueOrdersCopy = new Map(queueOrders);

    queueOrdersCopy.delete(id);
    setQueueOrders(queueOrdersCopy);
  }

  return (
    <OrderList.Provider
      value={{
        addProduct,
        currentOrder,
        addOrder,
        queueOrders,
        updateQueueOrder,
        cancelOrder
      }}
    >
      {children}
    </OrderList.Provider>
  );
}