// import "./Archive.css"
import "./Signin.css"

import { FaHeart, FaLock, FaRegHeart, FaUser } from 'react-icons/fa';
import React, { useEffect, useState } from "react";

// import LoginPaper from "../../Paper/PaperApi";
import { Productcontex } from "./Context";
import {validate} from "../thirtheen/LoginProject/validation"
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
// export const setDatacontext = React.createContext()
const Signin = () => {
  const { data, setData } = React.useContext(Productcontex);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  return (
 <div >
     <h2 style={{color: "#DFB2D5"}}>Signin</h2>
     <div className="first-container-signin">
       <div className="second-container-signin">
       <div>
       <form>
         <div className="usename">
         <FaUser/>
         <input style={{ color:(data.username.length)<2 ?"red":" black"}}

            className="third-container-signin"
            type="text"
            name="username"
            placeholder="* type your username" 
            value={data.username}
            onChange={changeHandler}
            onFocus={focusHandler}
         />
         </div>
         </form>
         </div>
            {/* <FaHeart />
             <FaRegHeart /> */}
      <div>
         {errors.username && touched.username && <span  style={{fontSize: "12px",color:"red",marginLeft:"2vh"}}>{errors.username}</span>}
         </div>
       </div>
       <div className="second-container-signin">
       <div>
         <form>
       <div style={{marginTop:"2px"}} className="ussename">
       <FaLock/>
         <input  className="third-container-signin"  style={{ color:(data.password.length)<4 ?"red":" black"}}
           placeholder="* type your password"  
           type="password"
           name="password"
           value={data.password}
           onChange={changeHandler}
           onFocus={focusHandler}
           
         />
           </div>
           </form>
           </div>
       <div>
         {errors.password && touched.password && <span  style={{fontSize: "10px",marginLeft:"2vh", color:(data.password.length)<4 ?"red":" black"}}>{errors.password}</span>}
         </div>
       </div>
      </div >
    </div>      
  );
};

export default Signin;
