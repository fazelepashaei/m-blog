import React, { Component } from "react";

class Salin1 extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      firstname: "",
      lastname: "",
      phone: "",
    };
  }
  Subimt() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>SALIN</h1>
        <input
          type="text"
          value={this.state.password}
          //   onChange={(data) => {
          //     this.setState({ password: data.target.value });
          //   }}
        >
          {" "}
        </input>
        <input
          type="text"
          value={this.state.lastname}
          //   onChange={(data) => {
          //     this.setState({ lastname: data.target.value });
          //   }}
        >
          {" "}
        </input>
        <input
          type="text"
          value={this.state.firstname}
          //   onChange={(data) => {
          //     this.setState({ firstname: data.target.value });
          //   }}
        >
          {" "}
        </input>
        <input
          type="text"
          value={this.state.phone}
          //   onChange={(data) => {
          //     this.setState({ phone: data.target.value });
          //   }}
        >
          {" "}
        </input>
        <button onClick={this.Subimt()}>Subimt</button>
      </div>
    );
  }
}

export default Salin1;
