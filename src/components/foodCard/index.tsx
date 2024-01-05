import Image from "next/image";
import { Food } from "@types";
import styles from "./styles.module.css"
import FoodVariant from "@component/foodVariant";
import { AddOutline, EditOutline } from "@icons";

export default function FoodCard({food}:{food: Food}){
  const handleClick = (food: Food) => {
    
  }

  return (
    <li className={styles.card}>
      <Image src={food.img} alt={food.name} className={styles.card_image} />
      <div className={styles.card_body}>
        <h3 className={styles.title}>{food.name}</h3>
        {food.variants ? (
          <ul className={styles.variants}>
            {food.variants.map((variant) => {
              return (
                <FoodVariant
                  variant={variant}
                  group={food.name}
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
          <EditOutline className={styles.outline} />
        </button>
        <button onClick={() => handleClick(food)}>
          <AddOutline className={styles.outline} />
        </button>
      </div>
    </li>
  );
}