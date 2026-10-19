import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>© 2026 K10-K10</p>
    </footer>
  );
}
