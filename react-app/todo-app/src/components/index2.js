import React from 'react';
import './style.css';
import Title from './OOP/title/title.js';
import Search from './OOP/todo-container/Search.js';
import Filter from './OOP/todo-container/Filter.js'
import Tasks from './OOP/todo-container/Tasks.js';
import Footer from './OOP/zfooter/Footer.js';

class TodoApp2 extends React.Component {

    render() {
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
    
}
export default TodoApp2