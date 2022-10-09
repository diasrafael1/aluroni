import { useState, useEffect } from "react";
import itens from "data/itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";

interface Props {
  searchValue: string;
  filter: number | null;
  order: string;
}

export default function Itens({ searchValue, filter, order }: Props) {
  const [listItens, setListItens] = useState(itens);

  function testSearch(title: string) {
    const regex = new RegExp(searchValue, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter) return filter === id;
    return true;
  }

  function handleOrder(list: typeof itens): typeof itens {
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
    const newList = itens.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
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
