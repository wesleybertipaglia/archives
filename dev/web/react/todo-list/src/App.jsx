import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    let localItems = localStorage.getItem("ITEMS");
    if (localItems == null) return [];
    return JSON.parse(localItems);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id != id);
    });
  }

  return (
    <>
      <Header />
      <main>
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
