import filters from "./filters.json";
import classNames from "classnames";
import styles from "./Filters.module.scss";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
  filter: number | null;
}

export default function Filters({ filter, setFilter }: Props) {
  function selectFilter(option: typeof filters[0]) {
    if (filter === option.id) {
      return setFilter(null);
    } else {
      return setFilter(option.id);
    }
  }

  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          key={option.id}
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
