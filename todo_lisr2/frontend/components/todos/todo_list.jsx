import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  return (
    <div>
      <TodoForm receiveTodo={receiveTodo} />
      <ul>
        {
          todos.map((todo, i) => (
            <TodoListItem title={todo.title} key={i.toString()} />
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;
