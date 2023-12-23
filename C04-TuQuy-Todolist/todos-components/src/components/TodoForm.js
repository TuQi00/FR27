import React, { useState } from 'react';

function TodoForm(props) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddItem(item);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={item}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default TodoForm;
