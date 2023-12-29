import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import './styles.css';
import { TodoProvider } from './components/TodoContext'

ReactDOM.render(
	<React.StrictMode>
		<TodoProvider>
			<TodoApp />
		</TodoProvider>
	</React.StrictMode>,
	document.querySelector('#root')
);
