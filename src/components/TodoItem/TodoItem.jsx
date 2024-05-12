import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem() {
  return (
    <li className={styles.item}>
      <span className={styles.name}>Zaplac rachunki</span>
      <Button>Zrobione</Button>
      <Button>Usuń</Button>
    </li>
  );
}
