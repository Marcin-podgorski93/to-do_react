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
  console.log(todos);

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
            setTodos((prevTodo) => [
              ...prevTodo,
              {
                name: newTodoName,
                done: false,
                id: prevTodo.length > 0 ? prevTodo.at(-1).id + 1 : 0,
              },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            name={todo.name}
            done={todo.done}
            onDeleteButton={() => {
              setTodos((prevTodo) =>
                prevTodo.filter((todos) => todos.id !== todo.id)
              );
            }}
            onDoneButtonClick={() => {
              setTodos((prevTodo) =>
                prevTodo.map((todos) => {
                  if (todos.id !== todo.id) {
                    return todos;
                  }
                  return {
                    ...todos,
                    done: true,
                  };
                })
              );
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
