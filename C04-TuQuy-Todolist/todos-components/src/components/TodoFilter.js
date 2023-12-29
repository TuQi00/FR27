import React from 'react';

function TodoFilter({ itemCount, changeState }) {
  const activeState = 0;

  return (
    <div className="todo-footer-container">
      <div className="todo-count">{itemCount} items left</div>
      <div className="todo-menus">
        <span
          className={`menu-item ${isActive(0) ? 'active' : ''}`}
          onClick={() => changeState(0)}
        >
          All
        </span>
        <span
          className={`menu-item ${isActive(1) ? 'active' : ''}`}
          onClick={() => changeState(1)}
        >
          Active
        </span>
        <span
          className={`menu-item ${isActive(2) ? 'active' : ''}`}
          onClick={() => changeState(2)}
        >
          Complete
        </span>
      </div>
    </div>
  );

  function isActive(state) {
    return activeState === state;
  }
}

export default TodoFilter;
