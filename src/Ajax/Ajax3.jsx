import React, { Component } from "react";
import axios from "axios";
import Post4 from "./post";
class Axios3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => console.log(response));
      .then((response) => this.setState({ postData: response.data }));
  }

  render() {
    const { postData } = this.state;
    return (
      <div>
        {postData.map((post) => (
          <Post4 key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Axios3;
