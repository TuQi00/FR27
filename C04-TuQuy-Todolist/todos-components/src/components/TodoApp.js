import React, { useEffect, useState } from 'react';
import TodoFilter from './TodoFilter';
import TodoFooter from './TodoFooter';
import TodoForm from './TodoForm';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

const initialTodos = [
  {
    id: 1,
    title: 'Uống một tách trà nóng',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Đến Academy học lập trình',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Ăn trưa cùng crush',
    isCompleted: false,
  },
  {
    id: 4,
    title: 'Thực hành lập trình',
    isCompleted: true,
  },
];

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterState, setFilterState] = useState(0);

  useEffect(() => {
    setTodos(initialTodos);
    setFilteredTodos(initialTodos);
  }, []);

  useEffect(() => {
    if (filterState === 0) {
      setFilteredTodos(todos);
    } else if (filterState === 1) {
      setFilteredTodos(todos.filter((todo) => !todo.isCompleted));
    } else if (filterState === 2) {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    }
  }, [filterState, todos]);

  function handleAddItem(item) {
    const newTodo = {
      id: Math.random() * 100000,
      title: item,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleFilterChange(value) {
    setFilterState(value);
  }
  
  return (
    <>
      <div className="app-container">
        <TodoHeader />
        <div className="todo-container">
          <TodoForm handleAddItem={handleAddItem} />
          <TodoFilter itemCount={filteredTodos.length} changeState={handleFilterChange} />
          <TodoList todos={filteredTodos} />
        </div>
      </div>
      <TodoFooter />
    </>
  );
}

export default TodoApp;

