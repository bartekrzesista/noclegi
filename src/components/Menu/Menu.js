import useAuth from "../../hooks/useAuth";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

function Menu() {
  const [auth, setAuth] = useAuth();

  return (
    <nav className={`${styles.menuContainer} bg-light`}>
      <ul className={styles.menu}>
        <li>
          <NavLink exact to="/" activeClassName={styles.menuItemActive}>
            Home
          </NavLink>
        </li>
        {auth ? (
          <>
            <li>
              <NavLink to="/profile" activeClassName={styles.menuItemActive}>
                Mój profil
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={styles.signButton}
                onClick={(e) => setAuth(false)}
              >
                Wyloguj
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" activeClassName={styles.menuItemActive}>
                Zaloguj
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName={styles.menuItemActive}>
                Zarejestruj się
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
