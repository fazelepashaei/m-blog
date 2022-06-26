import React, { Component } from "react";
import Child from "./purchild";
import MemoChild from "./memochild";
import Memochild from "./memochild";
class Pure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "HI",
    };
  }
  reSet = () => {
    this.setState({
      text: "HI",
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.reSet}>click</button>
        <h1>{this.state.text}</h1>
        {/* <Child textchild={this.state.text} /> */}
        <Memochild textchild={this.state.text} />
      </div>
    );
  }
}
export default Pure;
