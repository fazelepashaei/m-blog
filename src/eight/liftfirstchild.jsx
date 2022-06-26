import React, { Component } from "react";

class Liftfirstchild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.click}>first</button>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default Liftfirstchild;
