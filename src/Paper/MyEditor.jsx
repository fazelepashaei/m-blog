import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import React, { useState } from "react";

import Cookies from "universal-cookie";
import {Productcontex} from "./Context"
import ReactQuill from 'react-quill';

const MyEditor = () => {
    const cookie = new Cookies();
    const [valueEditor, setValueEditor] =useState("")
    const [title, settitle]=useState("")
    const [Imgurl, setImgurl]=useState("")
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
         content:{valueEditor},
         title:title,
         imgurl: Imgurl,

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
const List= async()=>{
  try {
    const response = await fetch(
      'http://localhost:4000/blog/:_id',
    );
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.error(error);
  } finally {
  }
}
const recChange = (content, delta, source, editor) => {
  console.log(editor.getHTML()); // rich text
  console.log(editor.getText()); // plain text
  console.log(editor.getLength()); // number of characters
}
  return (

    <div 
          style={{ backgroundImage: "url(/lib1.jpeg)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'}}
    >
      <div style={{flexDirection:"column",display:"flex"}}>
      <div 
            style={{backgroundColor:"#E0A47C",width:"40vw",height: '30vh'}}>
              <ReactQuill  theme="snow"  value={valueEditor} onChange={recChange}/>
              <button onClick={submitBLog}>Send</button>
    <label>Title</label>
              <input 
                  type="text"
                  name="title"
                  onChange={ (event) => settitle(event.target.value) }  
                  value={title} />
 <label>Imgurl</label>
              <input 
                  type="text"
                  name="Imgurl"
                  onChange={ (event) => setImgurl(event.target.value) }  
                  value={Imgurl} />
                  
                  </div> 
                  <button style={{width:"20vw",marginTop:"5vh"}} onClick={List}>Show My paper</button>   
                  </div>
    </div>
  );
}
export default MyEditor;