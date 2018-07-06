import React, { Component } from "react";
import { connect } from "react-redux";

class CreateList extends Component {
  render() {
    return (
      <li>
        <button className="remove-todo">
          <i className="material-icons">clear</i>
        </button>
        <span>{this.props.data.todo}</span>
        <button className="toggle-todo">
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
