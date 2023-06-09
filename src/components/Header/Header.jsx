import styles from "./Header.module.css";
import images from "../../constants/images";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={images.logo} />
      <div>Ignite Feed</div>
    </header>
  );
}
