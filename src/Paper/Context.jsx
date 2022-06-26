import React, { useContext, useState } from "react";
import { createContext } from "react";
export const Productcontex = createContext();
const Context = ({ children }) => {
  const [data, setData] = useState({
    username: "",
    imgurl: "",
    name: "",
    password:"",
    // content:"",
    // title:""
  });
  const [valueEditor, setValueEditor] = useState('');
  const [imgurl, setimgurl] = useState('');
  const [title, settitle] = useState('');
  const id ="";
  const [path,seTpath]=useState('');
  const [active,seTactive]=useState('false');
  return (
    <Productcontex.Provider
      value={{
        data,
        setData,
        valueEditor,
        setValueEditor,
        imgurl,
        setimgurl,
        title,
        settitle,
        id,
        path,
        seTpath,
        active,
        seTactive
      }}
    >
      {children}
    </Productcontex.Provider>
  );
};
export default Context;
