import { connect } from 'react-redux';
import TodoList from './todo_list';
import TodoForm from './todo_form';
import allTodos from '../../reducers/selectors';
import { receiveTodo, removeTodo } from '../../actions/todo_actions';
import React from 'react';

const mapStateToProps = (state) => {
  return {todos: allTodos(state)};
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId))
});


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
// export default connect(mapStateToProps,mapDispatchToProps)(TodoForm);
