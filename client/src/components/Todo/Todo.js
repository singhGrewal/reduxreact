import React, { Component } from "react";
import "./Todo.css";
import CreateList from "./CreateList";
import TodoHeader from "./TodoHeader";
import TodoForm from "./TodoForm";
import { createTodo } from "../../action/Todo_action";
import { connect } from "react-redux";
import TodoService from "../Service/TodoService";
import axios from "axios";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.TodoService = new TodoService();
  }
  componentWillMount() {
    this.fetchTodoList();
    // setInterval(this.fetchTodoList, 2000);
  }

  fetchTodoList = () => {
    console.log("Fetch Data");
    axios
      .get("http://localhost:4200/service")
      .then(response => {
        const toDoList = response.data;
        console.log("Set 2 Fetch Data", response.data);
        this.props.createTodo(toDoList);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todo = this.getTodo.value;
    console.log("Step 1 send data", todo);
    this.TodoService.sendData(todo);
    this.fetchTodoList;
    this.props.history.push("/todo");
  };

  todoBody() {
    return (
      <div className="todos-wrapper">
        <ul className="todos-list">
          {this.props.TodoList.map(items => (
            <CreateList key={items._id} data={items} />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    // {
    //   this.props.TodoList;
    // }
    // console.log(this.props.TodoList);
    return (
      <div>
        <div data-reactroot="" className="app-wrapper">
          <TodoHeader />
          {this.todoBody()}
          <div className="form-wrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                required
                type="text"
                placeholder="Enter New Todo"
                ref={newTodo => {
                  this.getTodo = newTodo;
                }}
              />
              <button type="submit">
                <i className="material-icons">add</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("TODO STATE IS ", state);
  return {
    TodoList: state.TodoList
  };
}

export default connect(
  mapStateToProps,
  { createTodo }
)(Todo);
