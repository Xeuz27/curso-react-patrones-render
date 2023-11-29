import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter() {
  const {totalTodos,completedTodos, loading }= useContext(TodoContext);
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
