import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "", body: "", done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleSubmit(e) {
    const key = Math.random(10000000);
    e.preventDefault();
    this.props.receiveTodo({[key]: this.state});
    this.setState({title: "", body: "", done: false });
  }

  updateTodo(e){
    console.log(this.state);
    e.preventDefault();
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.updateTodo} />
          <button> Add Todo! </button>

        </form>
      </div>);
  }
}

export default TodoForm;
