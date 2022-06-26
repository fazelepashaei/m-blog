import React, { Component } from "react";
import Liftfirstchild from "./liftfirstchild";
import Liftsecondchild from "./liftsecondchild";
class Appmain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  //dar lift kardan tabe va data miad b balatarin sathe app k hame component ha betunan azash estefade konan
  //
  clickHandler = () => {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  };
  render() {
    return (
      <div>
        <Liftfirstchild click={this.clickHandler} number={this.state.number} />
        <Liftsecondchild click={this.clickHandler} number={this.state.number} />
      </div>
    );
  }
}

export default Appmain;
