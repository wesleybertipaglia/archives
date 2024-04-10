const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>

      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
