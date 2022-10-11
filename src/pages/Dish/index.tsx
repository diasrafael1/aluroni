import Header from "components/Header";
import TagsDish from "components/TagsDish";
import dishes from "data/dishes.json";
import NotFound from "pages/NotFound";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Dish.module.scss";

export default function Dish() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dish = dishes.find((dish) => dish.id === Number(id));
  if (!dish) return <NotFound />;

  return (
    <Header>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
          <TagsDish {...dish} />
        </div>
      </section>
    </Header>
  );
}
