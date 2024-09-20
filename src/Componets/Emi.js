import React, { useState } from 'react'

function Emi() {
    const [val,setval]=useState()
    const [rate,setrate]=useState()
    const [year,setyear]=useState()
    const [emi,setemi]=useState()

    const cal=()=>{
        const data=Math.floor(val*(rate/100)/(1-(1+rate/100)**-year));
        const ans=data/12;
        setemi(ans)
    }
  return (
    <>
      
      <div className='emi_sec'>
            <div className='bg_emi'>
                    <h1>Emi Calculator</h1>
                    <label htmlFor="" className='lbl'>Amount:</label>
                    <input type='text' placeholder='Amount' className='txt' onChange={(e)=>{setval(e.target.value)}} value={val}/><br/><br/>
                    <label htmlFor="" className='lbl'>Rate:</label>
                    <input type='text' placeholder='Rate' className='txt' onChange={(r)=>{setrate(r.target.value)}} value={rate}/> <br/><br/>
                    <label htmlFor="" className='lbl'>Year:</label>
                    <input type='text' placeholder='Year' className='txt' onChange={(y)=>{setyear(y.target.value)}} value={year}/>
                        <br/><br/>
                    <button className='emi_btn' onClick={cal}>Calculator</button>

                    <h1>{emi}</h1>
            </div>
      </div>
    </>
  )
}

export default Emi
