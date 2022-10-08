import styles from "./Item.module.scss";
import itens from "../itens.json";
import classNames from "classnames";

interface Props {
  item: typeof itens[0];
}

export default function Item({ item }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={item.photo} alt={item.title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${item.category.label.toLowerCase()}`]]:
                true,
            })}
          >
            {item.category.label}
          </div>
          <div className={styles.item__portion}>{item.size}g</div>
          <div className={styles.item__qtdpeople}>
            Serve {item.serving} pessoa{item.serving > 1 && "s"}
          </div>
          <div className={styles.item__value}>
            R$ {item.price.toFixed(2).replace(".", ",")}
          </div>
        </div>
      </div>
    </div>
  );
}
