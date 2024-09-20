import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        
        <div className='btn_mainsec'>
        <Link to='puzzel'><button className='btn_puzzal p-2 text-white me-5 ps-4 pe-4'>Puzzal</button></Link>
        <Link to='tictoc'><button className='btn_puzzal p-2 text-white me-5 ps-4 pe-4'>TicToc</button></Link>
        <Link to='todo'><button className='btn_puzzal p-2 text-white ps-4 pe-4'>Todo</button></Link>
        

        </div>

        <div className='btn_mainsec'>
        <Link to='emi'><button className='btn_puzzal p-2 text-white me-5 ps-4 pe-4'>Emi Calculator</button></Link>
        <Link to='age'><button className='btn_puzzal p-2 text-white me-5 ps-4 pe-4'>Age Calculator</button></Link>
        </div>
    </>
  )
}

export default Home
