import OurHome from "assets/nossa_casa.png";
import dishes from "data/dishes.json";
import { useNavigate } from "react-router-dom";
import stylesTheme from "styles/Theme.module.scss";
import styles from "./Home.module.scss";

export default function Home() {
  const navigate = useNavigate();
  let recommendedDishes = [...dishes];
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
            <button
              className={styles.recommended__button}
              onClick={() => navigate(`/cardapio/prato/${item.id}`)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={OurHome} alt="Casa do aluroni" />
        <div className={styles.ourHome__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
