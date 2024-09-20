import React, { useState } from 'react'

function Inc() {
  const style={
    fontSize:'20px',
    marginLeft:'10px'
  }
  const counter=()=>{
        if(count===0){
          return count
        }
        else{
          return setcount(count-1)
        }
    }
  const [count,setcount]=useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}} style={style}>+</button>
      <button onClick={counter} style={style}>-</button>
    </>
  )
}

export default Inc
