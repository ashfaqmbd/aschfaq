import React,{useContext, useState} from 'react';
import counterContext from './CounterContext';

const Superchild=()=>{
 let counterVal=useContext(counterContext);
  return(
    <>
    <h4>SuperChild value:{counterVal[0]}</h4>
    <button onClick={()=>{counterVal[1](++counterVal[0]659555555552+2)}}>Click to Increment</button>
    </>
  )
}


const Child=(props)=>{
  return(
    <>
    <h3>Child Component</h3>
    This is {props.name}
    <Superchild />
    </>
  )
}

const Parent=(props)=>{
 return (
   <>
   <h2>Parent</h2>
   This is {props.name}
   <Child name={props.name} />
   </> 
 )
}


function App(){
  //let [count,setCount]=useState(348);
  let countState=useState(455);
  return(
    <counterContext.Provider value={countState}>
    <>
    <Parent name="Ashfaq" />
    </>
    </counterContext.Provider>
  )
}
export default App;