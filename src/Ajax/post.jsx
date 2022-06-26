import React, { Component } from "react";

class Post4 extends Component {
  render() {
    const { body, title, deletePost } = this.props;
    return (
      <div style={{ border: "1px yellow solid", margin: "10px" }}>
        <p>{title}</p>
        <button onClick={deletePost}>delete</button>
      </div>
    );
  }
}

export default Post4;
