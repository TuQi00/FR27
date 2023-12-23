import React, { useState } from 'react';

function TodoItem({ todo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleToggleStatus = () => {
    console.log('handleToggleStatus');
  };

  const handleEditClick = () => {
    console.log('handleEditClick');
    setEditing(true);
  };

  const handleDeleteClick = () => {
    console.log('handleDeleteClick');
    // Thực hiện các thao tác cần thiết khi người dùng click vào nút Delete
  };

  const handleSaveEdit = () => {
    console.log('handleSaveEdit');
    // Thực hiện các thao tác cần thiết khi người dùng lưu chỉnh sửa
    setEditing(false);
  };

  const handleCancelEdit = () => {
    console.log('handleCancelEdit');
    // Thực hiện các thao tác cần thiết khi người dùng hủy chỉnh sửa
    setEditedTitle(todo.title);
    setEditing(false);
  };

  const handleInput = (e) => {
    setEditedTitle(e.target.textContent);
  };

  return (
    <div className="todo-item-container">
      <span className="todo-item-toggle" onClick={handleToggleStatus}>
        <img src="assets/complete-tick.svg" alt="Complete Tick" />
      </span>
      <div
        className={`todo-item-content ${todo.isCompleted ? 'completed' : ''} ${
          isEditing ? 'editing' : ''
        }`}
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



