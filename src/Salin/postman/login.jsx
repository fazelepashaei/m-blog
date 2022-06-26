import React, { Component } from "react";

import Cookies from "universal-cookie";

const cookie = new Cookies();

class PostmanLogin extends Component {
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
  sendPostSalin = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "http://chl-api.rahkardigital.com/API/V1/User/login?phone=09999999999&password=1",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  rejesterSalin = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "http://chl-api.rahkardigital.com/API/V1/User/register?password=123456789Ab&firstname=koorosh&lastname=kakaei&phone=09999999999",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  submitBLog = async () => {
    alert("yes");

    console.log("salam salam");
    const ut = cookie.get("ut");
    fetch("http://localhost:4000/blog/write", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${ut}`,
      },
      body: JSON.stringify({
        title: "salam",
        content: "<h1> Hello World </h1>",
        imgurl: "lol",
      }),
    })
      .then((data) => {
        console.log(data);
        console.log("!!!!");
        return data.json();
      })
      .then((data) => {
        console.log(data);
      });
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  submitUser = async () => {
    fetch("http://localhost:4000/user/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgurl: "ax",
        username: "fazeleh",
        name: "pashae",
      }),
    })
      // .then(() => {
      //   console.log('!!!!')
      // })
      .then((response) => response.json())
      .then((json) => cookie.set("ut", json.token));
  };

  getme = async () => {
    const ut = cookie.get("ut");
    fetch("http://localhost:4000/user/me", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        // auth: `ut ${ut}`,
      },
      body: JSON.stringify({}),
    })
      .then((data) => {
        console.log(data);
        console.log("!!!!");
        return data.json();
      })
      .then((data) => console.log(data));
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.getPost}>get</button>
        <button onClick={this.sendPost}>post</button>
        <button onClick={this.sendPostSalin}> sendPostSalin</button>
        <button onClick={this.rejesterSalin}> signUp</button> */}
        <button onClick={this.submitBLog}> submitBLog </button>
        <button onClick={this.submitUser}>submitUser</button>
        <button onClick={this.getme}>me</button>

        <h1>API</h1>
        {/* {this.state.postData.map((post) => (
          <p>{post.title}</p>
        ))} */}
      </div>
    );
  }
}

export default PostmanLogin;
