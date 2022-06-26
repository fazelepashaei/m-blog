import "./PaperApiSignup.css"

import React, { useContext, useEffect } from "react";

import Cookies from "universal-cookie";
import { Productcontex } from "./Context";
import SignUp from "../thirtheen/LoginProject/SignUp";
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const cookie = new Cookies();
const PaperApiSinUp = () => {
    const navigate = useNavigate();
  const {
    data: { username, imgurl, name ,password},
  } = useContext(Productcontex);
  const {active,seTactive}=useContext(Productcontex)
  const location = useLocation();
  const SubmitUser = async () => {
    console.log(username);
    console.log(name);
    fetch("http://localhost:4000/user/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        name,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("meghdarjson",json)
if((json.token) && (location.state.props === '/'))
{
    cookie.set("ut", json.token);
    navigate('/')
}
else if ((json.token) && (location.state.props === location.state.props))
{
  cookie.set("ut", json.token) ;
  navigate(location.state.props);
  seTactive(false)
  console.log("okkkkk")
 
}

else if(json.msg==="bad input")
{
alert ("you probably forgot to give the required params or misspeled something")
}
else 
{
  if(json.msg==="this username already exists in the database")
  {
  alert ("self explanatory")
  }
}

   });
  };

  return (

 <div style={{ padding: '15vh'}}>
   <div className="backgroundsignup" >
     <div>
                    <div className="backgroundsignupsecond">
                      <SignUp />
                    </div>
        <div>
    
                   <div className="loginstyle">
                         <div className="se-loginstyle">
                            <button className="buttonlogin" onClick={SubmitUser}>SignUp</button>
                          </div>
                   </div>
     </div>
   </div>
          <div className="signuppart">
            <h3>Do You have an account?</h3>
            <button className="buttonlogin" onClick={()=>( navigate("/PaperApiSignin"))}>SignIn</button>
         </div>
  </div>
</div>

  );
};

export default PaperApiSinUp;
