import React from 'react';
import { useState ,useContext} from 'react';
import SecondChild from './secondChild';
import {ProductcontexTejarat} from './ContextTejarat'
const Child = (props) => {
    const { valuenum, setValue}=useContext(ProductcontexTejarat)
    return (
        <div>
            <h1>child</h1>
            {/* <button onClick={()=>{props.setData(0)}}>reset</button>
            <button onClick={()=>{console.log(props.numchild)}}>display</button> */}

            <button onClick={()=>setValue( valuenum+1)}>click context</button>
            <button onClick={()=>{setValue(0)}}>reset</button>
           

            
        </div>
    );
};

export default Child;