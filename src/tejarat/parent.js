import React from 'react';
import ReactDOM from 'react-dom';
import { useState ,useContext} from 'react';
import Child from './child';
import SecondChild from './secondChild';
import {ProductcontexTejarat} from './ContextTejarat'
const Parent = () => {

    // const [data, setData] = useState(0)
    // const [num,setNum] = useState(20)
    const { valuenum, setValue} =useContext(ProductcontexTejarat)
    return (
        <div>
            {/* <button onClick={()=>setData(data+1)}>click me</button>
            <h1>{data}</h1> */}
            <h1>{ valuenum}</h1>
            {/* <Child setData={setData} numchild={num}/> */}
            <button onClick={()=>setValue( valuenum+1)}>click context</button>
            <Child/>
            <SecondChild/>
        </div>
    );
};

export default Parent;