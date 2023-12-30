import React, { useState } from 'react';

function TodoForm({ handleAddItem, handleSearch  }) {
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    handleAddItem(item);
    setItem("");
  };
  
  const handleChange = (e) => {
    setItem(e.target.value);
    handleSearch(e.target.value);
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
