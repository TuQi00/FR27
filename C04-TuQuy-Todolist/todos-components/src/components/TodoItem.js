import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [displayTitle, setDisplayTitle] = useState(todo.title);

  const handleToggleStatus = () => {
    console.log(1111);
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };
    updateTodo(updatedTodo);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleSaveEdit = () => {
    console.log(editedTitle);
    const updatedTodo = {
      ...todo,
      title: editedTitle,
    };
    setDisplayTitle(editedTitle);
    updateTodo(updatedTodo);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    console.log(displayTitle, 'handleCancelEdit');
    const updatedTodo = {
      ...todo,
      title: displayTitle,
    };
    setDisplayTitle(displayTitle);
    updateTodo(updatedTodo)
    setEditing(false);
  };

  const handleInput = (e) => {
    setEditedTitle(e.target.textContent);
  };

  return (
    <div className="todo-item-container">
      <span className="todo-item-toggle" onClick={handleToggleStatus}>
        <img src={`${todo.isCompleted ? 'assets/complete-tick.svg ' : 'assets/uncompleted-tick.svg'}`} alt="Complete Tick" />
        
      </span>
      <div
        className={`todo-item-content ${todo.isCompleted ? 'completed' : ''} ${
          isEditing ? 'editing' : ''
        }`}
        contentEditable={isEditing}
        onInput={handleInput}
        onBlur={handleCancelEdit}
        dangerouslySetInnerHTML={{ __html: displayTitle }}
      />
      <div className="todo-item-options">
        {isEditing ? (
          <>
            <span className="icon-btn" onClick={handleSaveEdit}>
              Save
            </span>
            <span className="icon-btn" onClick={handleCancelEdit}>
              Cancel
            </span>
          </>
        ) : (
          <>
            <span className="icon-btn" onClick={handleEditClick}>
              <img src="assets/edit.svg" alt="Edit" />
            </span>
            <span className="icon-btn" onClick={handleDeleteClick}>
              <img src="assets/delete.svg" alt="Delete" />
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
