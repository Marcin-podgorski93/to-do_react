import { useState } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Zaplacic rachunki", done: false, id: 1 },
    { name: "Wyrzucic smieci", done: true, id: 2 },
  ]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodoName) => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { name: newTodoName, done: false, id: prevTodos.length + 1 },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} name={todo.name} done={todo.done} />
        ))}
      </ul>
    </div>
  );
}

export default App;
