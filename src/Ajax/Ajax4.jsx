import React, { Component } from "react";
import axios from "axios";
import Post4 from "./post";
import AxiosPost70 from "./sendpost";
class AxiosPost4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
      isError: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholyyyyder.typicode.com/posts")
      //   .then((response) => console.log(response));
      .then((response) => this.setState({ postData: response.data }))
      .catch((error) => this.setState({ isError: true }));
  }
  deletePost = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/${id}")
      .then((response) => console.log("delete", response));
  };
  render() {
    const { postData, isError } = this.state;
    return (
      <div>
        <AxiosPost70 />
        {isError ? (
          <h1>okkk</h1>
        ) : (
          postData.map((post) => (
            <Post4
              key={post.id}
              title={post.title}
              body={post.body}
              deletePost={() => this.deletePost(post.id)}
            />
          ))
        )}
      </div>
    );
  }
}

export default AxiosPost4;
