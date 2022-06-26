import React, { useContext, useEffect, useState } from "react";

import Cookies from "universal-cookie";
import {Productcontex} from "./Context"
const EditProfile = () => {
    const cookie = new Cookies();
    const submitBLog = async () => {
        console.log("salam salam");
        const ut = cookie.get("ut");
        fetch("http://localhost:4000/user/edit", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            auth: `ut ${ut}`,
          },
          body: JSON.stringify({
            name:name,
            bio:bio
          }),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("meghdarjson",json)
            if(json.msg==="bad input")
    {
      alert ("you probably forgot to give the required params or misspeled something")
    }
    else 
    {
      if(json.msg==="bad input")
    {
    alert ("you probably forgot to give the required params or misspeled something")
    }
 
    }
       });
      };

    const [name , setname]=useState("")
    const [bio, setbio] = React.useState([]);
    return (
        <div >
              <div className="display">
        <div className="display2">

            <div>
      <div 
            style={{backgroundColor:"#853973",width:"40vw",height: '28vh',flexDirection:"column",display:"flex"}}>
              <input 
                  className="third-container-signin"
                  placeholder="Edit your name"
                  type="text"
                  name="name"
                  onChange={ (event) => setname(event.target.value) }  
                  value={name} />
              <input 
                 className="bioedit"
                  placeholder="Edit your bio"
                  type="text"
                  name="bio"
                  onChange={ (event) => setbio(event.target.value) }  
                  value={bio} />
              <button className="buttonuser" onClick={submitBLog}>Send</button>
                    </div> 
                  </div>
              </div>
        </div>
    </div>    
    );
};

export default EditProfile;