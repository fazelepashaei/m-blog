import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Allblogs from "./Allblogs"
import Archive from "./Archive";
import Createpaper from "./Createpaper"
import DashboardLayout from "./DashboardLayout"
import EditProfile from "./EditProfile"
import Editblog from "./Editblog"
import ListBlog from "./Allblogs"
import MyEditor from "./MyEditor";
import Myblogs from "./Myblogs";
import PaperApi from "./PaperApi"
import PaperApiSignin from "./PaperApiSignin"
import PaperApiSinUp from "./paperApiSinUp";
import React from "react";
import SignUp from "../thirtheen/LoginProject/SignUp"
import Signin from "../Paper/Signin"
import SingleBlog from "./SingleBlog"

function RoterPages() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Archive/>} />
          <Route path="/MyEditor" element={<MyEditor />} />
          <Route path="/PaperApiSinUp" element={<PaperApiSinUp />} />
          <Route path="/single-blog/:_id" element={<SingleBlog />} />
          <Route path="/PaperApiSignin" element={<PaperApiSignin />} />
          <Route path="/dashboard/" element={<DashboardLayout />} >
            <Route path="edit" element={<EditProfile />} />

            <Route path="myblogs" element={<Myblogs />} />
            <Route path="allblogs" element={<Allblogs/>} />
            <Route path="createpaper" element={<Createpaper />} />
            <Route path="editblog" element={<Editblog />} />
 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default RoterPages;