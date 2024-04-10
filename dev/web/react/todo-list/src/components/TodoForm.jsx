import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.length < 4) return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="new-item">New Item</label>
        <div className="form-group">
          <input
            type="text"
            id="new-item"
            value={newItem}
            minLength={4}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button>Add</button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
