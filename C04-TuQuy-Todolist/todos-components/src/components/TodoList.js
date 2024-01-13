import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos,updateTodo,deleteTodo  }) {
  console.log('Received todos:', todos);
  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} updateTodo= {updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;