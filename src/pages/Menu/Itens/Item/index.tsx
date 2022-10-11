import TagsDish from "components/TagsDish";
import { useNavigate } from "react-router-dom";
import { Dish } from "types/dish";
import styles from "./Item.module.scss";

interface Props {
  item: Dish;
}

export default function Item({ item }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.item}
      onClick={() => navigate(`/cardapio/prato/${item.id}`)}
    >
      <div className={styles.item__image}>
        <img src={item.photo} alt={item.title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <TagsDish {...item} />
      </div>
    </div>
  );
}
