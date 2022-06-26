import React, { Component } from "react";

class PostEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      //   .then((json) => console.log(json));
      .then((json) => this.setState({ postData: json }));
  }

  sendPost = () => {
    const body = JSON.stringify({
      //   title: "foo",
      //   body: "bar",
      //   userId: 1,
      title: "my name",
      body: "react/react-native",
      userId: 1,
    });
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  render() {
    return (
      <div>
        <button onClick={this.getPost}>get</button>
        <button onClick={this.sendPost}>post</button>
        <h1>show</h1>
        {this.state.postData.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    );
  }
}

export default PostEx;
