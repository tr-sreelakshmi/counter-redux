import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/CounterSlice'
import './Counter.css'

function Counter() {
   const counter =useSelector((state)=>state.counter.count)
   const dispatch = useDispatch()
  return (
    <div>
<div className='heading'>
<h1>Counter App</h1>

</div>
    <div className='container'> 
<div className="box">
<h2>COUNTY COUNTER </h2>
        <h1>{counter}</h1>
<div className='button'>
  <button  className='btn1'  onClick={()=>dispatch(increment())}>Increment</button>
  <button className='btn2'onClick={()=>dispatch(decrement())}>Decrement</button>
  <button  className='btn3' onClick={()=>dispatch(reset())}>Reset</button>
  
</div>
</div>

    </div>
    </div>
  )
}

export default Counter