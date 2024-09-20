import React, { useState } from 'react'

function Cal() {
    const [num1,setnum1]=useState();
    const [num2,setnum2]=useState()
    const [total,settotal]=useState();
  return (
    <>
      <h3>no 1:</h3>
      <input type="text" onChange={(no)=>{setnum1(no.target.value)}}/>
      <h3>no 2:</h3>
      <input type="text" onChange={(noo)=>{setnum2(noo.target.value)}}/><br/>
        
      {/* <button>+</button><br/><br/> */}<br/><br/>
      <button  onClick={()=>{settotal(parseInt(num1)+parseInt(num2))}}>+</button>
      <h1>{total}</h1>
      {/* <h1>{num1}</h1>
      <h1>{num2}</h1> */}
    </>
  )
}

export default Cal
