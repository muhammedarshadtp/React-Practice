
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from '../CounterSlice';

 const Counter = () => {
    const count=useSelector((state)=>state?.counter?.value)
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())} >  increment </button><br />
        <p>{count}</p>
        <button onClick={()=> dispatch(decrement())}disabled ={count <=0} > decrement </button><br />
        <button onClick={()=> dispatch(reset())}>
        Reset
        </button>
    </div>
  )
}

export default Counter;