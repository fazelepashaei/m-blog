import React from 'react';
import {createContext} from "react"
import {useState} from 'react'
export const Productcontextfirst =createContext();

const Firstcontext = ({ children}) => {
    const [first,setfirst]=useState(0)
    return (
        <Productcontextfirst.Provider
        value={{
            first,
            setfirst
        }}
        >      {children}
        </Productcontextfirst.Provider>
    );
};

export default Firstcontext;