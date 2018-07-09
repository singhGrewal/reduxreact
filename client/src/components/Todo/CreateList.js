import React, { Component } from "react";
import { connect } from "react-redux";
import TodoService from "../Service/TodoService";

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.TodoService = new TodoService();
  }
  deleteTodo = () => {
    console.log("Delete 1", this.props.data._id);
    const deleteID = this.props.data._id;
    this.TodoService.deleteData(deleteID);
    // this.props.history.push("/");
  };

  editTodo = () => {
    console.log("Edit 1", this.props.data._id);
    const editID = this.props.data._id;
    this.TodoService.editData(editID);
  };

  render() {
    return (
      <li>
        <button
          className="remove-todo"
          onClick={e => this.deleteTodo(this.props.data._id)}
        >
          <i className="material-icons">clear</i>
        </button>
        <span>{this.props.data.todo}</span>
        <button
          className="toggle-todo"
          onClick={e => this.editTodo(this.props.data._id)}
        >
          <i className="material-icons">done</i>
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  null
)(CreateList);
