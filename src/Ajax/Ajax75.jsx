import React, { Component } from "react";
import axios from "axios";
class Interceptor extends Component {
  componentDidMount() {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        // title: "newtitle",
        // body: "newww",
        roya: "nnnn",
      })
      .then((response) => console.log(response.data));
  }
  //   componentDidMount() {
  //     axios
  //       .patch("https://jsonplaceholder.typicode.com/posts/1", {
  //         // title: "newtitle",
  //         // body: "newww",
  //         roya: "nnnn",
  //       })
  //       .then((response) => console.log(response.data));
  //   }

  render() {
    return <div></div>;
  }
}

export default Interceptor;
