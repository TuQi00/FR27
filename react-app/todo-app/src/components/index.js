import React from 'react';
import './style.css';
import Title from './Function/title/title.js';
import Search from './Function/todo-container/Search.js';
import Filter from './Function/todo-container/Filter.js'
import Tasks from './Function/todo-container/Tasks.js';
import Footer from './Function/zfooter/Footer.js';

const TodoApp = () => {
    return (
        <div id="todo-app">
            <Title />

            <div className="todo-container-wrapper">
                <div className="todo-container">
                    <Search />
                    <Filter />
                    <Tasks />
                </div>
            </div>
            
            <Footer/>
        </div>
    )
}
export default TodoApp