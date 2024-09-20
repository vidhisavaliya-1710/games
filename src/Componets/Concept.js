import React, { useState } from 'react'

function Concept() {
    // const [name,setname]=useState({id:1,email:'abc@gmail.com'})
    // const [count,setcount]=useState(0);
    // const counter=(n)=>{
    //     setcount(count+n)
    // }
    const [fname,setfname]=useState();
  return (
    <>
      {/* <h1>{name.email}</h1> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={()=>{setcount(count+1)}}>+</button> */}
      {/* <button onClick={()=>{counter(5)}}>+</button> */}
      <input type="text" name='' onChange={(a)=>{setfname(a.target.value)}}/>
      <h1>{fname}</h1>
    </>
  )
}

export default Concept
