import React, { Component } from "react";

class First2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }
  Getpost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ postData: json }));
  }
  sendPost = () => {
    const body = JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    });
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log("ok"));
  };
  deletePost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log("okkk"));
  };
  render() {
    return (
      <div>
        {/* <button onClick={this.Getpost}>click</button> */}
        <button onClick={this.sendPost}>send</button>
        <button onClick={this.deletePost}>delete</button>
        {this.state.postData.map((item) => (
          <p key={item.id}>{item.id}</p>
        ))}
      </div>
    );
  }
}

export default First2;
