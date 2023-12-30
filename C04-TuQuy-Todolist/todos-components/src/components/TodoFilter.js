import React from 'react';

function TodoFilter({ itemCount, changeState, handleSort, filterState }) {
  console.log(filterState, 'TodoFilter');

  function isActive(state) {
    // console.log(filterState,'filterState');
    // console.log(state,'state');
    return filterState === state;
  }

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

        <label>Sort By: </label>
        <select className='menu-item' onChange={(e) => handleSort(e.target.value)}>
          <option value="asc">Oldest</option>
          <option value="desc">Newest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );

  
}

export default TodoFilter;
