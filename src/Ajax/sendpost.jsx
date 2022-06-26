import React, { Component } from "react";
import axios from "axios";
class AxiosPost70 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  changeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  postHandler = () => {
    const text = this.state.title;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title: text })
      .then((response) => console.log(response.status));
  };
  render() {
    const { title } = this.state;

    return (
      <div>
        <input type="text" value={title} onChange={this.changeHandler} />
        <button onClick={this.postHandler}>send post</button>
      </div>
    );
  }
}

export default AxiosPost70;
