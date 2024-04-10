import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <section>
      <div className="container">
        <h2>Items</h2>
        <p>
          {todos.length == 0
            ? "No todos."
            : todos.length == 1
            ? "1 item"
            : todos.length + " items"}
        </p>

        <div className="todos">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                {...todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
