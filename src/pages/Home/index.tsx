import itens from "data/itens.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";

export default function Home() {
  let recommendedDishes = [...itens];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendations}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>Ver mais</button>
          </div>
        ))}
      </div>
    </section>
  );
}
