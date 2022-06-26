import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

import { EditorState, convertToRaw } from 'draft-js';
import React, { useState } from "react";

import Cookies from "universal-cookie";
import {Productcontex} from "./Context"
import ReactQuill from 'react-quill';
import draftToHtml from 'draftjs-to-html';

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
        // title: "salam",
        // content: "<h1> Hello World </h1>",
        // imgurl: "lol",
         content:valueEditor,
         title:title,
         imgurl: Imgurl,

      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data)
      // console.log ( dangerouslySetInnerHTML={{__html: valueEditor}}  )
      });

  };


  return (

    <div className="display"

    >
      <div style={{flexDirection:"column",display:"flex"}}>
      <div 
            style={{backgroundColor:"#DFB2D5",width:"40vw",height: '30vh',marginLeft:"20%"}}
         >
              <ReactQuill  theme="snow"  value={valueEditor} onChange={setValueEditor}/>
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

                  </div>
    </div>
  );
}
export default MyEditor;