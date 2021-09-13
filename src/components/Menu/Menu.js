import useAuth from "../../hooks/useAuth";
import styles from "./Menu.module.css";

function Menu() {
  const [auth, setAuth] = useAuth();

  return (
    <nav className={`${styles.menuContainer} bg-light`}>
      <ul className={styles.menu}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {auth ? (
            <button
              type="button"
              className={styles.signButton}
              onClick={e => setAuth(false)}
            >
              Wyloguj
            </button>
          ) : (
            <button
              type="button"
              className={styles.signButton}
              onClick={e => setAuth(true)}
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
