import { useState, useEffect } from "react";
import itens from "./itens.json";
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

  useEffect(() => {
    const newList = itens.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );

    setListItens(newList);
  }, [searchValue, filter]);

  return (
    <div className={styles.itens}>
      {listItens.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
