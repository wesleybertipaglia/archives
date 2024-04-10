import { useEffect, useState } from "react";
import Section from "../components/Section";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    "JavaScript",
    "TypeScript",
    "Node",
    "React",
  ]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo == "") return;

    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleRemoveTodo = (index) => {
    setTodoList(todoList.filter((_, i) => i != index));
  };

  const handleEditTodo = (index) => {
    let editedtodo = window.prompt("Edit your task: ", todoList[index]);
    const updatedTodoList = [...todoList];
    updatedTodoList[index] = editedtodo;
    setTodoList(updatedTodoList);
  };

  const handleMoveUpTodo = (index) => {
    if (index == 0) return;

    const updatedTodoList = [...todoList];
    [updatedTodoList[index], updatedTodoList[index - 1]] = [
      updatedTodoList[index - 1],
      updatedTodoList[index],
    ];

    setTodoList(updatedTodoList);
  };

  const handleMoveDownTodo = (index) => {
    if (index == todoList.length - 1) return;

    const updatedTodoList = [...todoList];
    [updatedTodoList[index], updatedTodoList[index + 1]] = [
      updatedTodoList[index + 1],
      updatedTodoList[index],
    ];

    setTodoList(updatedTodoList);
  };

  return (
    <Section>
      <h1>Todo List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button>Add</button>
      </form>

      <div className="my-4">
        <ol className="col">
          {todoList.map((todo, index) => {
            return (
              <li key={index} className="row">
                <p className="w-100">{todo}</p>
                <button
                  title="Move Up"
                  onClick={() => handleMoveUpTodo(index)}
                  disabled={index == 0}
                >
                  👆
                </button>
                <button
                  title="Move Down"
                  onClick={() => handleMoveDownTodo(index)}
                  disabled={index == todoList.length - 1}
                >
                  👇
                </button>
                <button title="Edit" onClick={() => handleEditTodo(index)}>
                  📝
                </button>
                <button title="Delete" onClick={() => handleRemoveTodo(index)}>
                  ❌
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
};

export default Todo;
