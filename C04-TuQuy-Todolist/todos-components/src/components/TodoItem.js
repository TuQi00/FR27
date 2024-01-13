import React, { useState, useRef, useEffect } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const contentEditableRef = useRef(null);

  const handleToggleStatus = () => {
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
    const updatedTodo = {
      ...todo,
      title: editedTitle,
    };
    updateTodo(updatedTodo);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(todo.title);
    setEditing(false);
  };

  const handleInput = () => {
    if (contentEditableRef.current) {
      setEditedTitle(contentEditableRef.current.textContent);
    }
  };

  useEffect(() => {
    if (contentEditableRef.current && isEditing) {
      contentEditableRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="todo-item-container">
      <span className="todo-item-toggle" onClick={handleToggleStatus}>
        <img src={`${todo.isCompleted ? 'assets/complete-tick.svg' : 'assets/uncompleted-tick.svg'}`} alt="Complete Tick" />
      </span>
      <div
        ref={contentEditableRef}
        className={`todo-item-content ${todo.isCompleted ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}
        contentEditable={isEditing}
        onInput={handleInput}
        onBlur={handleCancelEdit}
        dangerouslySetInnerHTML={{ __html: editedTitle }}
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
