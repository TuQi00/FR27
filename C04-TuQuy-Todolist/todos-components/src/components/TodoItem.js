import React, { useState, useEffect } from 'react';
import { useTodoContext } from './TodoContext';

function TodoItem({ todo }) {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [displayTitle, setDisplayTitle] = useState(todo.title); // Thêm state để hiển thị nội dung công việc
  const { updateTodo } = useTodoContext();

  useEffect(() => {
    // Thực hiện các thao tác khi editedTitle thay đổi
    console.log('editedTitle has changed:', editedTitle);

    // Hiển thị nội dung công việc đã chỉnh sửa trên màn hình
    setDisplayTitle(editedTitle);
  }, [editedTitle]);

  const handleToggleStatus = () => {
    // Thay đổi trạng thái hoàn thành của công việc
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    // Cập nhật danh sách công việc trong state
    updateTodo(updatedTodo);
  };

  const handleEditClick = () => {
    console.log('handleEditClick');
    setEditing(true);
  };

  const handleDeleteClick = (item) => {
    console.log('handleDeleteClick');
    
    // Thực hiện các thao tác cần thiết khi người dùng click vào nút Delete
  };

  const handleSaveEdit = () => {
    console.log('handleSaveEdit', editedTitle, 1111);

    // Cập nhật nội dung công việc trên màn hình
    setDisplayTitle(editedTitle);

    // Cập nhật danh sách công việc trong state
    const updatedTodo = {
      ...todo,
      title: editedTitle,
    };
    updateTodo(updatedTodo);

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
