import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>5 zadan</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <div>
        <input type="text" name="" id="" />
      </div>
    </div>
  );
}

export default App;
