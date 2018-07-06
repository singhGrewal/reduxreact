import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>Header will be here</h1>

          <div>{this.props.children}</div>
          <p>Footer will be here</p>
        </div>
      </div>
    );
  }
}

export default Layout;
