import React, { Component } from "react";

class Liftsecondchild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.click}>second</button>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default Liftsecondchild;
