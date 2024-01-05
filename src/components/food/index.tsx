import Image from "next/image";
import { Food } from "@types";
import styles from "./styles.module.css"
import FoodCard from "@component/foodCard";

export default function FoodMenu({ menu }: { menu: Food[] }) {
  return (
    <ul className={styles.container}>
      {menu.map((food: Food) => {
        return (
          <FoodCard food={food} key={food.name}/>
        );
      })}
    </ul>
  );
}