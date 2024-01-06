import {DishesProvider, DrinksProvider} from '@context/menu';
import DishesMenu from '@component/dishes';
import styles from './page.module.css'
import DrinksMenu from '@component/drinks';
import EnqueueOrder from '@component/enqueueOrder';

export default function Home() {
  
  return (
    <main>
      <section className={styles.section}>
        <h2>Comidas:</h2>
        <DishesProvider>
          <DishesMenu />
        </DishesProvider>
      </section>
      <section className={styles.section}>
        <h2>Bebidas:</h2>
        <DrinksProvider>
          <DrinksMenu/>
        </DrinksProvider>
      </section>
      <EnqueueOrder/> 
    </main>
  );
}
