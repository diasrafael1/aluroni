import { useState } from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import Search from "./Search";

export default function Menu() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main>
      <nav className={styles.logo}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
    </main>
  );
}
