import "./PaperApiSignin.css"

import {FaArrowAltCircleRight, FaFacebook, FaHome, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import React, { useContext, useEffect } from "react";

import Cookies from "universal-cookie";
import {Link} from "react-router-dom";
import { Productcontex } from "./Context";
import SignUp from "../thirtheen/LoginProject/SignUp";
import Signin from "../Paper/Signin"
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom"

const cookie = new Cookies();
const PaperApiSinUp = () => {
  const navigate = useNavigate();
  const {
    data: { username, imgurl, name ,password,content, title},
  } = useContext(Productcontex);
  const {active,seTactive}=useContext(Productcontex)
  const location = useLocation();
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
          console.log("meghdare dakhelesh",data);
          console.log("!!!!");
        return(data.json()
             .then((data) => {
        console.log("meghdare dakhelesh",data)
        // console.log("location.state.props",location.state.props)
        if((data.token) && (location.state.props === '/'))
        {
          {console.log("raft")}
          cookie.set("ut", data.token) ;
          navigate("/dashboard")

        }
   
            else if ((data.token) && (location.state.props === location.state.props))
        {
          cookie.set("ut", data.token) ;
          navigate(location.state.props);
          seTactive(false)
          console.log("okkkkk")
        }
        // else if( (location.state.props === '/PaperApiSignin'))
        // {
        //   {console.log("raft")}
        //   cookie.set("ut", data.token) ;
        //   navigate("/dashboard")

        // } 

       else if(data.msg==="bad inputs")
        {
        alert ("you probably forgot to give the required params or misspeled something")
        }
        else
        {
          if(data.msg==="bad request: no such user exists")
          {
          alert ("self explanatory")
          } 

          else
          
          {
            if(data.msg==="password doesnt match")
            {
            alert ("password doesnt match")
            } 
          }
         }}))})};
           
  return (

 <div >
          <div  className="backgroundsignincontainer">
              <div>
                              <div className="backgroundsigninpart1">
                                    <Signin />
                              </div>
                <div>
                      <div className="loginstyle">
                              <div className="se-loginstyle">
                                    <FaArrowAltCircleRight style={{marginTop: "1.5vh",width:"2vw",height:"2.5vh"}}/>
                                    <button className="buttonlogin" onClick={loginPaper}>login</button>
                              </div>
                                <div>
                                    <h5 style={{marginRight:"20vw"}}>Forgot Password?</h5>
                                </div>
                                <div className="iconstyle">
                                    <FaFacebook className="iconst"/>< FaInstagramSquare className="iconst"/>< FaLinkedin className="iconst"/>
                                </div>
                          </div>
                      </div>
              </div>
             <div className="signuppart">
                <h3>Dont have an account?</h3>
                <button className="buttonlogin" onClick={()=>( navigate("/PaperApiSinUp"))}>SignUp</button>
            </div>
      </div>
</div> 
  );
};

export default PaperApiSinUp;
