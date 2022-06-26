import React from 'react';
import { useState ,useContext} from 'react';
import {ProductcontexTejarat} from './ContextTejarat'
const SecondChild= (props) => {
    const { valuenum, setValue}=useContext(ProductcontexTejarat)
    return (
        <div>
        
           <button onClick={()=>setValue( valuenum+1)}>click context</button>
           <button onClick={()=>{setValue(0)}}>Second reset</button>
        </div>
    );
};

export default SecondChild;