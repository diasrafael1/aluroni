import { CgSearch } from "react-icons/cg";
import styles from "./Search.module.scss";

interface SearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchValue, setSearchValue }: SearchProps) {
  return (
    <div className={styles.search}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
