import { useState, useEffect } from "react";
import dishes from "data/dishes.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { Dishes } from "types/dish";

interface Props {
  searchValue: string;
  filter: number | null;
  order: string;
}

export default function Itens({ searchValue, filter, order }: Props) {
  const [listItens, setListItens] = useState(dishes);

  function testSearch(title: string) {
    const regex = new RegExp(searchValue, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter) return filter === id;
    return true;
  }

  function handleOrder(list: Dishes): Dishes {
    switch (order) {
      case "porcao":
        return list.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return list.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return list.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return list;
    }
  }

  useEffect(() => {
    const newList = dishes.filter(
      (dish) => testSearch(dish.title) && testFilter(dish.category.id)
    );

    setListItens(handleOrder(newList));
  }, [searchValue, filter, order]);

  return (
    <div className={styles.itens}>
      {listItens.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
