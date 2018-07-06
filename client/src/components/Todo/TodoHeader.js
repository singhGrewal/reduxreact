import React, { Component } from "react";

class TodoHeader extends Component {
  render() {
    return (
      <div className="filters-wrapper">
        <button>
          <span>ALL</span>
        </button>
        <button>
          <span>FINISHED</span>
        </button>
        <button>
          <span>WORKING</span>
        </button>
      </div>
    );
  }
}

export default TodoHeader;
