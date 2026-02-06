import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }>
            VIN Decoder
          </NavLink>

          <NavLink
            to="/variables"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }>
            Variables
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
