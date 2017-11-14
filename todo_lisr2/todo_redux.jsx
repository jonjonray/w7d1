import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './frontend/store/store';
import Root from './frontend/components/root';

import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from './frontend/actions/todo_actions';
import { receiveTodos, receiveTodo, removeTodo } from './frontend/actions/todo_actions';
import allTodos from './frontend/reducers/selectors';



document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.allTodos = allTodos;
  window.store = store;
  ReactDOM.render(
    <Root store={store} />, document.getElementById('content')
    );
});
