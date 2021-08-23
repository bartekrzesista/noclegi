import React, { useContext } from "react";
import styles from "./Menu.module.css";
import AuthContext from "../../context/authContext";

function Menu() {
  const auth = useContext(AuthContext);

  return (
    <nav className={`${styles.menuContainer} bg-light`}>
      <ul className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {auth.isAuthenticated ? (
            <button
              type="button"
              className={styles.signButton}
              onClick={auth.signOut}
            >
              Wyloguj
            </button>
          ) : (
            <button
              type="button"
              className={styles.signButton}
              onClick={auth.signIn}
            >
              Zaloguj
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
