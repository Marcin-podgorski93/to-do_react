import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

export function TodoItem({ name, done, onDeleteButton, onDoneButtonClick }) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButton}>Usuń</Button>
    </li>
  );
}
