import { Link, Outlet, useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

import Cookies from "universal-cookie";

const cookie = new Cookies();

const Myblogs = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = React.useState([]);

    const navigate = useNavigate();

useEffect(() => {

    const token = cookie.get('ut')

    fetch('http://localhost:4000/blog/my-blogs',
      {
        method: 'GET',
        headers: {
            auth: `ut ${token}`,
        },
     }
     )
    .then(res => res.json())
    .then(data => {
        console.log('im in useeffect')
        console.log(data)
        setData(data)
        setLoading(false)
    })

}, [])


if (loading) {
    return <h1> loading </h1>
}

    return (
        <div>
           <div >
             <div className="display">

               <div  className="display2" >
                {data.map((item, i) => (
             
                 <div
                  style={{
                   
                    backgroundColor: "white",
                    width: "100px", height:  "100px",
                    borderRadius: 10,
                    marginLeft:"5px",
                    marginTop:"20px"
                          }}
                  >
                      <h1  style={{ fontSize: 12 }}>
                        {item.title}
                        {console.log(item.title)}
                      </h1>
                      <img style={{width: "50px", height: "50px",borderRadius: '15px'}}
              src={item.imgurl}
             
                     />
                </div> 
                     ))}
             </div>
        </div>
    </div>
 </div>
    );
};

export default Myblogs;