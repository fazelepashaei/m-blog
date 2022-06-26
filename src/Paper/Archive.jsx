import "./Archive.css"

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Archive = () => {
  const [file,setFiles]=useState(null)
    const location = useLocation();
    console.log("use",location)
    const URLpath=(location.pathname);
    const navigate = useNavigate();
    const Signup = () => { navigate("/PaperApiSinUp")};
    const [topblog, setTopblog] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [datauser, setDatauser] = React.useState([]);
    const myIndex = 0;
    const showArchive = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/blog/',
        );
  
        const json = await response.json();
        console.log("infopaper",json)
        setData(json);
        console.log("data",data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      showArchive();
       Alluser();
      Topblog();
     
    }, []);
    const Alluser =async()=>{

      try {
        const response = await fetch(
          'http://localhost:4000/user/',
        );
  
        const json = await response.json();
        console.log("alluser",json);
         setDatauser(json);
        
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    const Topblog =async()=>{

      try {
        const response = await fetch(
          'http://localhost:4000/blog/top-blogs',
        );
        const json = await response.json();
        console.log(json);
        setTopblog(json);
        console.log("topblog",json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }

    }
    const Carousel= ()=> {
      let i;
      let x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(Carousel, 2000); // Change image every 2 seconds
    }
    const OnDetail =  (item) => {
      console.log("itemmmm",item._id)}
    return (
     <div >
        <div className="first-container-archive">
          <div>
              <div className="second-container-archive">
                 <div className="third-container-archive">
                                  <div className="fourth-container-archive">
                                    <button className="tooltip" style={{fontSize:"2vh",color:"#782564",backgroundColor:"#DFB2D5",borderRadius:"1vh",marginTop:"2vh",marginRight:"2vh",width:"10vh",height:"3vh"}} onClick={Signup} >
                                      SignUp
                                      <span className="tooltiptext">You Should SignUp For Download blog,But dont need SignUp for read blog </span>
                                    </button>
                                    <button className="tooltip" style={{fontSize:"2vh",color:"#782564",backgroundColor:"#DFB2D5",borderRadius:"1vh",marginRight:"2vh",marginTop:"2vh",width:"10vh",height:"3vh"}}  >
                                        <Link to="/PaperApiSignin"  state={{ props: URLpath }}>
                                          <span className="tooltiptext">You need Login For Send Score and Comment </span>
                                          SignIn
                                        </Link>
                                    </button>
                            </div>
                            <i class="fa fa-youtube icon"></i>
                <div className="fifth-container-archive">
                    <h1 className="h1">Writers</h1>  
                <div className="img-slider">
                    <div className="slider-container" >
                      {datauser.map((item, i) => (
                      <div>
                        <div>
                            <div>
                              <div>
                                   <img className="imgarchive" src={`http://localhost:4000/${item.avatar}`}/>  
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> 
                </div>
              </div>
                            <div className="purpleline">
                                <h1 style={{color:"white"}}>500+ Paper </h1>
                            </div>
              </div>
             
              
<div className="arch_container">
      <div className="arch_user_first">
          {datauser.map((item, i) => (
                 <div className="arch_user_second"  onClick={()=>{ OnDetail(item)}}>
                     <div className="arch_user_thirth">
                         <div  className="arch_user_fourth"></div>
                            <div className="arch_user_render_first" >
                                <div     style={{ width: "10vw",height: "3vh",backgroundColor:"white",borderRadius:"15px"}}>
                                    <h1 style={{marginTop:".5vh",fontSize: "12px",}}>
                                       {item.username}
                                     </h1>
                                </div>
                                <img   style={{width: '10vw',height: '15vh',borderRadius:"10vh",marginTop:"3vh"}}  src={`http://localhost:4000/${item.avatar}`}/>
                       </div>
                </div> 
            </div>
        ))}
      </div>
      <div  style={{marginTop:"15vh",height: "65vh", overflowY: 'scroll'}} >
              {data.map((item, i) => (
              <div  className="arch_blog_first">
                <Link to={`/single-blog/${item._id}`} >
                    <div className="arch_blog_second">
                          <div className="arch_blog_thirth">  </div>
                    <div>
                        <div style={{justifyContent: "center"}}>
                          <h1  style={{ fontSize: 12 }}>
                            {item.title}
                          </h1>
                          <img style={{width: '10vw', height: '20vh',borderRadius: '85px'}}  src={item.imgurl}/>
                      </div> 
                    </div>
                </div>
              </Link>
              </div>
        ))}
       </div>  
      <div className="topblogcontainer">
              {topblog.map((item, i) => (
              <div className="top_blog_first" >
                <div className="top_blog_second">
                  <div  className="top_blog_thirth"></div>
                    <div>
                        <h1 style={{ fontSize: 12 }}>
                          {item.title}
                        </h1>
                        <div style={{ fontSize: 8 }}dangerouslySetInnerHTML={{__html: item.content}}></div> 
                    </div>
                </div>
              </div>
        ))}
        </div>
       </div>
     </div>
    </div>
  </div>
</div>
    );
};

export default Archive;