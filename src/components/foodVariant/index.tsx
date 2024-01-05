import { Variant } from "@types";
import styles from "./styles.module.css"

export default function FoodVariant({variant, group}:{variant: Variant, group: string}){
    return (
      <li className={styles.variant}>
        <label>
          <input type="radio" name={group} disabled={!variant.free} />
          <div>{variant.name}</div>
          <span>S/. {variant.price}</span>
        </label>
      </li>
    );
}