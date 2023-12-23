import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
