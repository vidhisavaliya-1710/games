import React, { useState } from 'react'

function Age() {
  const [date,setdate]=useState()
  const [calculate,setcalculate]=useState()
  const [month,setmonth]=useState()
  const [day,setday]=useState()
  const cal=()=>{
    // setcalculate(date)
    const today=new Date();
    const dateofbirth=new Date(date)
    const year=today.getFullYear()-dateofbirth.getFullYear();
    const months=today.getMonth()-dateofbirth.getMonth();
    const days=today.getDate()-dateofbirth.getDate()
    setcalculate(year)
    setmonth(months)
    setday(days)
  }

  const reset=()=>{
    setcalculate('')
    setmonth('')
    setday('')
  }
  return (
    <>
      <div className='age_sec p-5'>
        <div className='bg-white p-4 ps-5 pe-5 age_box'>
          <input type="date" onChange={(e)=>setdate(e.target.value)} value={date}/><br/><br/>
          {/* <input type="date" onChange={(d)=>{setdate1(d.target.value)}}/><br/><br/> */}
          
          <h4>Age:{calculate}</h4>
          <h4>Month:{month}</h4>
          <h4>Day:{day}</h4>


          <button className='btn text-center ms-2 mt-3' onClick={cal}>Calculate</button>
          <button className='btn text-center ms-3 mt-3' onClick={reset}>Reset</button>
          {/* <button className='btn text-center ms-3' onClick={cal}>Reset</button> */}
        </div>
      </div>
    </>
  )
}

export default Age