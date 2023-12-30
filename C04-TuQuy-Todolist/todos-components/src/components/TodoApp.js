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
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);
  const [filterState, setFilterState] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  
  useEffect(() => {
    let filtered = todos;
  
    if (filterState === 1) {
      filtered = todos.filter((todo) => !todo.isCompleted);
    } else if (filterState === 2) {
      filtered = todos.filter((todo) => todo.isCompleted);
    }
  
    if (searchTerm) {
      filtered = filtered.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    const sortedTodos = [...filtered];
    if (sortOrder === "asc") {
      sortedTodos.sort((a, b) => a.id - b.id);
    } else if (sortOrder === "desc") {
      sortedTodos.sort((a, b) => b.id - a.id);
    } else if (sortOrder === "a-z") {
      sortedTodos.sort((a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
    } else if (sortOrder === "z-a") {
      sortedTodos.sort((a, b) => b.title.localeCompare(a.title, 'en', { sensitivity: 'base' }));
    }
  
    setFilteredTodos(sortedTodos);
  }, [filterState, todos, searchTerm, sortOrder]);

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  function handleAddItem(item) {
    const newTodo = {
      id: Math.random() * 100000,
      title: item,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleFilterChange(value) {
    console.log(value, 'state');
    setFilterState(value);
  }

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  const handleSort = (order) => {
    setSortOrder(order);
  }
  
  return (
    <>
      <div className="app-container">
        <TodoHeader />
        <div className="todo-container">
          <TodoForm handleAddItem={handleAddItem} handleSearch={handleSearch} />
          <TodoFilter itemCount={filteredTodos.length} changeState={handleFilterChange} handleSort={handleSort} filterState={filterState}/>
          <TodoList todos={filteredTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
      <TodoFooter />
    </>
  );
}

export default TodoApp