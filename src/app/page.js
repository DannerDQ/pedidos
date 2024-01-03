"use client";

import { useEffect, useRef, useState } from "react";
import "./page.css"

export default function Home() {
  const [orders, setOrders] = useState({});
  const [total, setTotal] = useState(0)
  const menu = [
    {
      name: "combinado ",
      description: "broaster, papas, chaufa",
      price: 11.0,
    },
    { name: "salchipapa", description: "papa, hotdog", price: 10.0 },
    { name: "broaster", description: "papa, pollo", price: 10.0 },
    { name: "mixto", description: "papa, hotdog,broaster", price: 11.0 },
    {
      name: "triple",
      description: "chaufa, papa, huevo o hotdog, broaster",
      price: 13.0,
    },
  ];

  const addOrder = (order, id) => {
    const _orders = {...orders}
    _orders[id] = order;
    setOrders(_orders);
  };

  const remOrder = (id) => {
    const _orders = { ...orders };
    delete _orders[id];
    setOrders(_orders);
  };

  const renderOrders = () => {
    const ordersToRender = [];
    for (let id in orders) {
      const { name, price } = orders[id];

      ordersToRender.push(
        <li key={id}>
          <h3>
            {name} - S/.{price}
          </h3>
          <button onClick={() => remOrder(id)} className="remove">X</button>
        </li>
      );
    }

    return ordersToRender;
  }

  useEffect(()=>{
    let acum = 0
    for (let id in orders) {
      const {price} = orders[id]

      acum += price
    }
    setTotal(acum)
  }, [orders])

  return (
    <main>
      <section className="menu">
        <h2>Carta:</h2>
        <ul>
          {menu.map((dish) => {
            const id = crypto.randomUUID();

            return (
              <li key={id}>
                <button onClick={() => addOrder(dish, id)} className="add">
                  {dish.name} - S/.{dish.price}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section >
        <div className="title">
          <h2>Pedidos:</h2>
          <span>S/.{total}</span>
        </div>
        <div className="summary">
          <ul>
            {Object.keys(orders).length === 0 ? (
              <li className="empty_summary">Aún no hay pedidos</li>
            ) : (
              renderOrders()
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
