import React from "react";
import styles from "./Menu.module.css";

function Menu() {
  return (
    <nav className={styles.menuContainer}>
        <ul className={styles.menu}>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>Home</li>
        </ul>
    </nav>
  );
}

export default Menu;
