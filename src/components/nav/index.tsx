"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "@public/logo.png";
import styles from "./styles.module.css"
import { usePathname } from "next/navigation";
import { MutableRefObject, useEffect, useReducer, useRef } from "react";

export default function Nav(){
    const path = usePathname()
    const inicio: MutableRefObject<null | HTMLLabelElement> = useRef(null)
    const pedidos: MutableRefObject<null | HTMLLabelElement> = useRef(null);
    const historial: MutableRefObject<null | HTMLLabelElement> = useRef(null);

    useEffect(()=>{
        if(path==="/" && inicio.current)inicio.current.click()
        else if(path==="/pedidos" && pedidos.current)pedidos.current.click()
        else if (path === "/historial" && historial.current) historial.current.click();
    }, [path])

    return (
      <nav className={styles.nav}>
        <span>
          <Image
            src={logo}
            priority
            alt="Arrechos - Fast Food"
            className={styles.logo}
          />
        </span>
        <ul className={styles.navigation}>
          <li>
            <input type="radio" name="page" id="inicio"/>
            <label htmlFor="inicio" ref={inicio}>
                <Link href={"/"} className={styles.navigation__anchor}>
                Inicio
                </Link>
            </label>
          </li>
          <li>
            <input type="radio" name="page" id="pedidos" />
            <label htmlFor="pedidos" ref={pedidos}>
                <Link href={"/pedidos"} className={styles.navigation__anchor}>
                Pedidos
                </Link>
            </label>
          </li>
          <li>
            <input type="radio" name="page" id="historial" />
            <label htmlFor="historial" ref={historial}>
                <Link href={"/historial"} className={styles.navigation__anchor}>
                Historial
                </Link>
            </label>
          </li>
        </ul>
      </nav>
    );
}