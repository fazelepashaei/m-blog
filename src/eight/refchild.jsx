import React, { Component } from "react";
class Refchild extends React.Component {
  constructor(props) {
    super(props);

    this.inputtext = React.createRef();
  }
  showref = () => {
    console.log(this.inputtext.current.value);
  };
  render() {
    return (
      <div>
        <button onClick={this.showref}>clickme</button>
        <input ref={this.inputtext} type="text" />
      </div>
    );
  }
}
export default Refchild;
