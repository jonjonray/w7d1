import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { receiveTodos, receiveTodo, removeTodo } from '../actions/todo_actions';
import merge from 'lodash/merge';
import _ from 'lodash';



const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


export const todosReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case RECEIVE_TODO:
      return merge({}, state, action.todo);
    case RECEIVE_TODOS:
      const newState = merge({}, action.todos);
      return newState;
    case REMOVE_TODO:
      const frozenState = Object.assign(state);
      delete frozenState[action.todoId];
      const newState2 = merge({}, frozenState);
      return newState2;
    default:
      return state;
  }
};

export default todosReducer;
