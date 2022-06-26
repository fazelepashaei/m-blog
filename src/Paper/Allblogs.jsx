import "./DashboardLayout.css"
import "./Allblogs.css"

import React,{useEffect} from 'react';

import Cookies from "universal-cookie";

const cookie = new Cookies();
const Allblogs = () => {
    const [ScoreNumber,seTscoreNumber]= React.useState(0)
    const [comment,seTcomment]= React.useState("Type a comment")
    const [stateData,setStateData]=React.useState("")
    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [datauser, setDatauser] = React.useState([]);
    const GetAllblog = async () => {
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
      GetAllblog();
      }, []);
    return (
      <div className="display">
        <div className="display2">
            <div style={{display: 'flex',flexDirection:"row"}}>
              {data.map((item, i) => (
                 <div className="allblog">
                      <h1  style={{ fontSize: 12 }}>
                        {item.title}
                      </h1>
                      <img style={{width: "50px", height: "50px",borderRadius: '15px'}}
                        src={item.imgurl} />
                </div>  ))}       
             </div>
          </div>
        </div>
    );
};

export default Allblogs;