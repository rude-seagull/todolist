import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DEFAULT_TASKS = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App initialTasks={DEFAULT_TASKS} />
  </React.StrictMode>
);