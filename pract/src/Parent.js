import React,{useContext} from 'react';
import Child from './Child.js';
import counterContext from './CounterContext';

const Parent=()=>{
    let counterValue=useContext(counterContext)
    return(
    <counterContext.Provider value={235}>
           <Child />
           <h2>counter value:{counterValue}</h2>
    </counterContext.Provider>
       
    )
}

export default Parent;
