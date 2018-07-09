import React, { Component } from "react";
import { Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Header will be here</h1>

          <ul>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/add-item">add-item</Link>
            </li>
            <li>
              <Link to="/index">index</Link>
            </li>
            <li>
              <Link to="/edit/:id">/edit/:id</Link>
            </li>
          </ul>

          <div>{this.props.children}</div>
          <p>Footer will be here</p>
        </div>
      </div>
    );
  }
}

export default Layout;
