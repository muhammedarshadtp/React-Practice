
import React, { useState } from 'react'

function Home() {
    const [count,setCount]=useState(0)
  return (
    <div style={{backgroundcount:"white"}}>
        <button onClick={()=>{setCount(count+1)}}>increment</button><br />
        <label className='hai'>{count}</label><br />
        <button onClick={()=>{setCount(count > 0 ? count -1 : 0)}} >Decrement</button> <br />
        <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}

export default Home