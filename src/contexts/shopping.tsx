import { Food, Product } from "@types";
import { ReactNode, createContext, useState } from "react";

export const ShoppingCart = createContext({})

export default function ShoppingCartProvider({children}:{children: ReactNode}){
    const [orders, setOrders] = useState({})
    const [order, setOrder] = useState({})

    const addProduct = (food: Food) => {
    }

    return (
        <ShoppingCart.Provider value={{orders, setOrders, addProduct}}>
            {children}
        </ShoppingCart.Provider>
    )
}