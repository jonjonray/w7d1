import React from 'react';

export default ({ todo, removeTodo }) => (

  <li>{todo.title}
  <button onClick={() => removeTodo(todo.id)}> Remove Item </button>
  </li>
);
