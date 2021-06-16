import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const todoList = [
  { id: 'todo-0', name: 'task-1', checked: true },
  { id: 'todo-1', name: 'task-2', checked: false },
  { id: 'todo-2', name: 'task-3', checked: false }
]

ReactDOM.render(
  <App tasks={todoList} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
