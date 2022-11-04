import { Productcontextfirst } from './firstcontext';
import React from 'react';
import {useContext} from 'react';
const array1 = [1, 4, 9, 16];
const Firstparent = () => {
     const{first,setfirst}= useContext(Productcontextfirst)
    return (
        <div>
            <h1>{first}</h1>
            <h1>first</h1>
  
        </div>
    );
};

export default Firstparent;