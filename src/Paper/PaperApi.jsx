import React, { useContext, useEffect } from "react";

import Cookies from "universal-cookie";
import { Productcontex } from "./Context";
import SignUp from "../thirtheen/LoginProject/SignUp";

const cookie = new Cookies();
const Paper = () => {
  const {
    data: { username, imgurl, name ,password,content, title},
  } = useContext(Productcontex);
  const submitBLog = async () => {
    console.log("salam salam");
    const ut = cookie.get("ut");
    fetch("http://localhost:4000/blog/write", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${ut}`,
      },
      body: JSON.stringify({
         content,
         title,
         imgurl

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
  };

  const SubmitUser = async () => {
    console.log(username);
    console.log(imgurl);
    console.log(name);
    fetch("http://localhost:4000/user/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgurl,
        username,
        name,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        cookie.set("ut", json.token);
      });
  };

  const getme = async () => {
    const ut = cookie.get("ut");
    fetch("http://localhost:4000/user/me", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        auth: `ut ${ut}`,
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
  const loginPaper = async () => {
    fetch("http://localhost:4000/user/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        username,
        
      }),
    })
      .then((data) => {
        return data.json();
      })
       .then(({ token }) => {
         console.log(token);
        cookie.set("ut", token) 
       }   )

     
  };
  return (
    <div>
      <button onClick={submitBLog}> submitBLog </button>
      <button onClick={SubmitUser}>submitUser</button>
      <button onClick={getme}>getmeme</button>
      <button onClick={loginPaper}>loginPaper</button>
      <SignUp />
    </div>
  );
};

export default Paper;
