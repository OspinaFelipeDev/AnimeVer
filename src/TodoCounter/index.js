import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  
  return (
    <h1 className="TodoCounter">
      Has visto <span>{completedTodos}</span> de <span>{totalTodos}</span> Animes
    </h1>
  );
}

export { TodoCounter };