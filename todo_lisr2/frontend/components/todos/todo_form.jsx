import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: "", title: "", body: "", done: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({id: Math.random(10000000)});
    this.props.receiveTodo({[this.state.id]: this.state});
    this.setState({ id: "", title: "" });
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
          <input type="text" onChange={this.updateTodo} value={this.state.title}/>
          <button> Add Todo! </button>

        </form>
      </div>);
  }
}

export default TodoForm;
