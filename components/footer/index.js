import Link from "next/link";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤ by&nbsp;
      <Link href="https://www.linkedin.com/in/hakan-angin/" target="_blank">
        Hakan Angın
      </Link>
    </footer>
  );
}
