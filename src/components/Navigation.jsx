import { Link } from "react-router-dom";
import Logo from "../assets/logo-gold.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} />
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles["fixed-margin-top"]}></div>
    </header>
  );
};

export default Navigation;
