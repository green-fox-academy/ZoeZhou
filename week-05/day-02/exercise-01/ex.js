var React = require('react');
var ReactDOM = require('react-dom');

// create component
var TodoComponent = React.createClass({
  getInitialState: function () {
    return {
      todos: ['code', 'game', 'eat', 'shit']
    };
  },
  render: function () {
    var todos = this.state.todos;
    todos = todos.map(function (item, index) {
      return (
        <TodoItem item={item} key={index} deleteItem={this.deleteItem}/>
      );
    }.bind(this));
    return (
      <div>
        <h1>Hello React</h1>
        <p>Todo list</p>
        <ul>{todos}</ul>
      </div>
    );
  },
  deleteItem: function (item) {
    var newTodos = this.state.todos.filter(function(value){
      return value !== item;
    });
    this.setState({
      todos: newTodos
    });
  }
});

// create Todoitem component
var TodoItem = React.createClass({
  render: function () {
    return (
      <li>
        <div>
          <span>{this.props.item}</span>
          <span onClick={this.handleDelete}> x</span>
        </div>
      </li>
    );
  },
  handleDelete: function () {
    this.props.deleteItem(this.props.item);
  }
});

ReactDOM.render(
  <TodoComponent />,
  document.getElementsByClassName('todo-container')[0]
);