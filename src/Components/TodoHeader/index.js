import React, {  useContext, cloneElement } from 'react';
import { TodoContext } from '../../Context/TodoContext';

function TodoHeader({ children }) {
  const {loading} = useContext(TodoContext)
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
