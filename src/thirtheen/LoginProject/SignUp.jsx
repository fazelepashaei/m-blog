import React, { useState, useEffect } from "react";
import { validate } from "./validation";
import LoginPaper from "../../Paper/PaperApi";
import { Productcontex } from "../../Paper/Context";
import "./Signup.css"
// export const setDatacontext = React.createContext()
const SignUp = () => {
  const { data, setData } = React.useContext(Productcontex);

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);

  const changeHandler = (event) => {
    // if (event.target.name === "isAccepted") {
    //   setData({ ...data, [event.target.name]: event.target.checked });
    // } else {
    setData({ ...data, [event.target.name]: event.target.value });
    // }
    // console.log(data);
  };
  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  return (



    <div >
   
    <h2 style={{color: "#DFB2D5"}}>SignUp</h2>
    <div   className="first-container-signup">
      <div  className="second-container-signup">
      <div>
      <form>
        <div className="usernamesignup">
        {/* <label style={{fontSize:"2vh",backgroundColor:"#DFB2D5",borderRadius:"1vh"}}>username</label>  */}
        {/* <FaUser/> */}
        {/* <i class="fa fa-user icon"></i> */}
        <input style={{ color:(data.username.length)<2 ?"red":" black"}}

           className="third-container-signup"
           type="text"
           name="name"
          
         //  name = "uname"
          
         //  placeholder= {<FaHeart />} " type your username"
          placeholder="* type your name" 
          value={data.name}
          onChange={changeHandler}
          onFocus={focusHandler}
        />
        </div>
        </form>
        </div>
           {/* <FaHeart />
     <FaRegHeart /> */}
     <div>
        {errors.username && touched.name && <span  style={{fontSize: "12px",color:"red",marginLeft:"2vh"}}>{errors.name}</span>}
        </div>
      </div>
      <div className="second-container-signup">
      <div>
        <form>
      <div style={{marginTop:"2px"}} className="usernamesignup">
      {/* <FaLock/> */}
        {/* <label style={{fontSize:"2vh",backgroundColor:"#DFB2D5",borderRadius:"1vh"}}>password</label> */}
        <input   style={{ color:(data.password.length)<4 ?"red":" black"}}
               //     style={{ 
               //      width:" 10vw",
               //     height: "4vh",
               //     borderRadius :"4px",
               //     position: "relative" ,
               //     backgroundColor:"#DFB2D5",
               //    transition:"0.3s all",
               //   //  marginBottom:"1vh",
               //   //  marginTop:"3vh",
               //    marginLeft:"6vh",
               //    color:(data.password.length)<4 ?"red":" black"
                  
               //  }}
             //   style={{ 
             //     width:" 10vw",
             //    height: "4vh",
             //    borderRadius :"4px",
             //     position: "relative" ,
             //    backgroundColor:"#DFB2D5",
             //   transition:"0.3s all",
             //   marginBottom:"1vh",
             //   marginLeft:"6vh",
             //   fontfamily:"arial",
             //   color:(data.password.length)<4 ?"red":" black"
              
             // }}
             className="third-container-signup"
                
         //  class="fontAwesome"
         //  name="emailAddress" 
          placeholder="* type your username"  
          type="password"
           
              name="username"
              value={data.username}
              onChange={changeHandler}
              onFocus={focusHandler}
          
        />
          </div>
          </form>
          </div>
      <div>
      {errors.username && touched.username && <span style={{fontSize: "10px",marginLeft:"2vh", }}>{errors.username}</span>}
        {/* {errors.password && touched.password && <span  style={{fontSize: "10px",marginLeft:"2vh", color:(data.password.length)<4 ?"red":" black"}}>{errors.password}</span>} */}
        </div>
      </div>
      </div >
    
      
      </div>      
    // <div >
    //   <form>
    //     <h2>SignUp</h2>
    //     <div >
    //       <label style={{fontSize:"3vh",backgroundColor:"#FBD7BE",borderRadius:"1vh"}}>Name</label>
    //       <input
    //            className="third-container-signup"
    //           //    style={{ 
    //           //     width:" 10vw",
    //           //    height: "4vh",
    //           //    borderRadius :"4px",
    //           //    position: "relative" ,
    //           //    backgroundColor:"#FBD7BE",
    //           //   transition:"0.3s all",
    //           //   marginBottom:"1vh",
    //           //   marginLeft:"6vh"
              
    //           // }}
    //         type="text"
    //         name="name"
    //         value={data.name}
    //         onChange={changeHandler}
    //         onFocus={focusHandler}
    //       />
    //       {errors.name && touched.name && <span>{errors.name}</span>}

    //       <div>
    //         <label style={{fontSize:"3vh",backgroundColor:"#FBD7BE",borderRadius:"1vh"}}>username</label>
    //         <input className="third-container-signup"
    //             //    style={{ 
    //             //     width:" 10vw",
    //             //    height: "4vh",
    //             //    borderRadius :"4px",
    //             //    position: "relative" ,
    //             //    backgroundColor:"#FBD7BE",
    //             //   transition:"0.3s all",
    //             //   marginBottom:"1vh",
    //             //   marginLeft:"2vh"
    //             // }}
    //           type="text"
    //           name="username"
    //           value={data.username}
    //           onChange={changeHandler}
    //           onFocus={focusHandler}
    //         />
    //         {errors.username && touched.username && <span>{errors.username}</span>}
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

export default SignUp;
