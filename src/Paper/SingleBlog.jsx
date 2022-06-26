import { Link, useNavigate } from "react-router-dom";
import React,{useContext, useEffect} from 'react';

import Cookies from "universal-cookie";
import { Productcontex } from "./Context";
import { useLocation } from 'react-router-dom';
import {useParams} from 'react-router-dom';

const cookie = new Cookies();
const SingleBlog = () => {
  const {
    data: { username, imgurl, name ,password,content, title},
  } = useContext(Productcontex);
    const {active,seTactive}=useContext(Productcontex)
    const params=useParams();
    console.log(params)
    const location = useLocation();
    const URLpath=(location.pathname);
    console.log("usel",location)
    const [listcomment,seTlistcomment]=React.useState([])
    const [isDisabled, setIsDisabled] =React.useState(false);
    const [ScoreNumber,seTscoreNumber]= React.useState(0)
    const [comment,seTcomment]= React.useState("Type a comment")
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [datauser, setDatauser] = React.useState([]);
    const navigate = useNavigate();
    const SinglePaper = async () => {
        try {
          const response = await fetch(
             `http://localhost:4000/blog/single-blog/${params._id}`,
          );
    
          const json = await response.json();
          console.log("meghdare dakhelesh",json)
          setData(json);
          console.log("data",data)
          console.log("meghdaresho neshon bede",json)
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        const token = cookie.get('ut')
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
          }) 
            ); 
          })
        SinglePaper();
      }, []);
      const  getID = async ( blogId) => {
         const ut = cookie.get("ut");
        fetch("http://localhost:4000/blog/submit-rate", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
             auth: `ut ${ut}`,
          },
          body: JSON.stringify({
            blogId: blogId,
            score:ScoreNumber
    
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
      const handleKeyDown = (event,blogId) => {
        if (event.key === 'Enter') {
          seTcomment(event.target.value)
          console.log('blodg id comment : ', blogId);
          console.log('comment : ', comment);
          const ut = cookie.get("ut");
          fetch("http://localhost:4000/comment/submit", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
               auth: `ut ${ut}`,
            },
              body: JSON.stringify({
                blogId: blogId,
                text:comment
            }),
          })
            .then((data) => {
              return data.json();
            })
             .then((response) => {
               console.log(response);
             })
        }}

        const handleKeyDownScore = (event,blogId) => {
          if (event.key === 'Enter') {
            seTscoreNumber(event.target.value)
            console.log('blodg id score: ', blogId);
            console.log("score",ScoreNumber);
            const ut = cookie.get("ut");
            fetch("http://localhost:4000/blog/submit-rate", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
                 auth: `ut ${ut}`,
              },
              body: JSON.stringify({
                blogId: blogId,
                score:ScoreNumber
              }),
            })
              .then((data) => {
                return data.json();
              })
               .then((response) => {
                 console.log(response);
               })
          }}
          const DisplayComment =async()=>{
            try {
              const response = await fetch(
                `http://localhost:4000/comment/by-blog/${data._id}`,
              );
              const json = await response.json();
              console.log(json);
              seTlistcomment(json);
              console.log("list comment",json);
            } catch (error) {
              console.error(error);
            } finally {
            }
      
          }
    return (
        <div>
            <div style={{paddingBottom:"20px"}} className="display">
              <div className="display2">
                  <img style={{width: '15vw', height: '30vh',borderRadius: '150px'}}   src={data.imgurl}/>
              </div>
            </div>
            <div style={{marginLeft:"270px"}} className="display3">
                <div style={{fontSize: 20,fontweight:"bold",color:"#782564"}}>{data.title}</div>
                <div style={{ fontSize: 12, color:"#782564" ,fontweight:"bold"}}dangerouslySetInnerHTML={{__html: data.content}}></div>
            </div>
          <input
                                    style={{ 
                                     width:" 4vw",
                                    height: "5vh",
                                    borderRadius :"25px",
                                    position: "relative" ,
                                    backgroundColor:"#DFB2D5",
                                   transition:"0.3s all",
                                   marginBottom:"1vh",
                                   textAlign:"center",
                                 }}
                                 type="number"
                                 onChange={ (event) => seTscoreNumber(event.target.value) }  
                                 value={ScoreNumber}
                                 disabled={active}
                                 onKeyDown={(e) => handleKeyDownScore(e,  data._id )}
                                  />
                                                   <input
                                    style={{ 
                                     width:" 8vw",
                                    height: "5vh",
                                    borderRadius :"25px",
                                    position: "relative" ,
                                    backgroundColor:"#DFB2D5",
                                   transition:"0.3s all",
                                   marginBottom:"1vh",
                                   marginLeft:"2vh"
                                 }}
                                 type="text"
                                  name="comment"
                                 onChange={ (event) => seTcomment(event.target.value) }  
                                onKeyDown={(e) => handleKeyDown(e,  data._id )}
                                 value={comment}
                                 onFocus={(e) => e.target.value = ""}
                                 disabled={active}
                                  />
                                  <button className="buttonuser" onClick={()=>DisplayComment(data._id)}> Comments</button>
  <div>

    <button className="buttonuser">
              <Link to="/PaperApiSignin"  state={{ props: URLpath }}>
                SignIn
                </Link>
    </button>
    <button className="buttonuser">
            <Link to="/PaperApiSinUp"  state={{ props: URLpath }}>
            SignUp
            </Link>
  </button>

<div
 style={{marginTop:".5vh",height: "90vh", overflowY: 'scroll'}}
 >
              {listcomment.map((item, i) => (
              <div  style={{  
                backgroundColor: "white",
                width: "14vw",
                height: "32vh",
                borderRadius: 10,
                  marginBottom:"2vh",
                  paddingTop:"3vh"

              }}>
         
                <div
                  style={{
                    flex: 4,
                    backgroundColor: "#DFB2D5",
                    width: "12vw",
                    height: "30vh",
                    borderRadius: 10,
                    marginBottom:"2vh",
                    marginLeft:"2vh",
                  }}
                >
                         <div  
                          style={{
                    flex: 4,
                    backgroundColor: "#782564",
                    width: "12vw",
                    height: "3vh",
                    borderTopRightRadius: 10,
                    borderTopLeftRadius:10,
                  }}></div>
                  <div > 
                    <div>
                      <h1  style={{marginTop:".5vh",fontSize: "12px",}}>
                        {item.text}
                      </h1>
                    </div>
                  </div>
                </div> 
              </div>
        ))}
      </div>
    </div>
</div>
    );
};

export default SingleBlog;