
import React, { useReducer, useState } from 'react'
import Child from './Child'
import Header from './Child'
import Counter from './Counter'

function reducer(state,action){
    switch (action.type) {
        case "increment":
            return {count :state.count+1}
        case "decrement":
            return {count :state.count > 0 ? state.count-1:0} 
        case "Reset":
            return {count:0}       
    
        default:
            return state;
    }
}



function Home() {
    
   const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>


        <Header />
        <br />
        <button onClick={()=>dispatch({type:"increment"})}>increment</button><br />
        <label className='hai'>{state.count}</label><br />
        <button onClick={()=>dispatch({type:"decrement"})} >Decrement</button> <br />
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button><br />
        
        {/* {arr.map((num,index)=>{
            return <li key={index}>
                {num}
            </li>

        })} */}
        <div style={{marginTop:"20px",padding:"20px"}}>
              <Counter/>
        </div>
      
    </div>
  )
}

export default Home