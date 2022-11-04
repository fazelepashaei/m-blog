import "./DashboardLayout.css"

import { Link, Outlet, useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';

import Cookies from "universal-cookie";

const cookie = new Cookies();

const DashboardLayout = () => {

    const [loading, setLoading] = useState(true)
    const [file,setFiles]=useState(null)
    const [user, setUser] = useState(null)
    const navigate = useNavigate();
    useEffect(() => {

        const token = cookie.get('ut')

        fetch('http://localhost:4000/user/me', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                auth: `ut ${token}`,
            },
            body: '{}'
        })
        .then(res => res.json())
        .then(data => {
            console.log('im in useeffect')
            console.log(data)

            if (!data._id) return navigate('/PaperApiSignin')
            console.log("chie",data)
            setUser(data)
            setLoading(false)
        })

    }, [])


    if (loading) {
        return <h1> loading </h1>
    }

    const SubmitAvatar = async () => {
        try {
          
          if (!file) return
    
          console.log(file)
    
          const formData = new FormData()
          const token = cookie.get('ut')
          formData.append('avatar', file)
           
          fetch('http://localhost:4000/user/update-avatar', {
            method: 'POST',
            headers: {
           
             // 'auth': 'ut eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxNjUxNTE3NzIwNjI4NjA2NTQ2IiwiaWF0IjoxNjUxNTIyOTg3fQ.r9HsxWH_C7oRx9veQYMCDAfw4coE8ldVc1I9CfZBssw'
         
             auth: `ut ${token}`,
            },
            body: formData
          }).then(res => {
             console.log("res",res)
            return res.json()
          }).then(data => {
              console.log("data ro neshun bede",data)
          })
    
        } catch (error) {
          console.log('lol')
        }
      }

    return (
        <div>
 
<div >

    <div className="second-container-dashboard"> 

                                  <div >
                                  <div className="mypic">
                                  <div className="mypic2" >

<img className="imgavatar" src={`http://localhost:4000/${user.avatar}`} />
                      <img 
    src="http://localhost:4000/+{file.name}"   
/> 

      </div> 
      </div> 
  <div className="picbutton">
        <input
          type="file"
           onChange={e => {
            setFiles(e.target.files[0])
          }}
          />
                                  <button onClick={SubmitAvatar} className="buttondashboard">Send</button>
                                  </div>              
                    
              </div>  

               <div className="coulmn2">

               <div className="buttonline">
                <Link to={'/dashboard/allblogs'} >
                        <button className="buttonuser">All blog</button>
                        </Link>
                        <Link to={'/dashboard/myblogs'} >
                        <button className="buttonuser">My blog</button>
                       </Link>
                       <Link to="/dashboard/edit" >
                        <button className="buttonuser">Edit user</button>
                        </Link>
                        <Link to="/dashboard/createpaper" >
                        <button className="buttonuser">Create blog</button>
                        </Link>    
                 </div>
          </div>           
    </div>
</div>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;