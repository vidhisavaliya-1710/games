import React, { useState } from 'react'

function Tictoc() {
    const [no,setno]=useState(Array(9).fill(''));
    const [act,setact]=useState(0);
    const [result,setresult]=useState('');
    const [status,setstatus]=useState(true)
    // const [winer,setwiner]=useState();
    const demo=[...no]
      const game=(n)=>{
        // console.log(n)
        // setno[n]=act
        // setact(act)
        // setact(n)
        // if(n===''){
        //   alert('done')
        // }
        // setact(no)
       
        if(demo[n]==='')
          if(act%2===0){
            demo[n]='X'
          }
          else{
            demo[n]='O'
          }
          setact(act+1)
       setno(demo)
        win()
        // btn()
      }

      const win=()=>{
        if((demo[0]==='O'&& demo[1]==='O' && demo[2]==='O')||
          (demo[3]==='O'&& demo[4]==='O' && demo[5]==='O') ||
        (demo[6]==='O'&& demo[7]==='O' && demo[8]==='O') ||
        (demo[0]==='O'&& demo[3]==='O' && demo[6]==='O') ||
        (demo[1]==='O'&& demo[4]==='O' && demo[7]==='O') ||
        (demo[2]==='O'&& demo[5]==='O' && demo[8]==='O') ||
        (demo[0]==='O'&& demo[4]==='O' && demo[8]==='O') ||
        (demo[2]==='O'&& demo[4]==='O' && demo[6]==='O')
        ){
          setresult('O is win')
        }

        if((demo[0]==='X'&& demo[1]==='X' && demo[2]==='X')||
          (demo[3]==='X'&& demo[4]==='X' && demo[5]==='X') ||
        (demo[6]==='X'&& demo[7]==='X' && demo[8]==='X') ||
        (demo[0]==='X'&& demo[3]==='X' && demo[6]==='X') ||
        (demo[1]==='X'&& demo[4]==='X' && demo[7]==='X') ||
        (demo[2]==='X'&& demo[5]==='X' && demo[8]==='X') ||
        (demo[0]==='X'&& demo[4]==='X' && demo[8]==='X') ||
        (demo[2]==='X'&& demo[4]==='X' && demo[6]==='X')
        ){
           setresult('X is win')
        }
        // btn()
      }

      const reset=()=>{
        setno([''])
        setact(0)
        setresult('')
        setstatus(false)
      }

      // const btn=()=>{
      //   if(result!==""){
      //     <input type='text' disabled={true} value={no}/>
      //   }
      //   else{
      //     <input type='text' disabled={false} value={no}/>
      //   }
      // }
  return (
    <>
      <div className='mainbox'>
            <input type="button" name='' onClick={()=>{game(0)}} value={no[0]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(1)}} value={no[1]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(2)}} value={no[2]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(3)}} value={no[3]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(4)}} value={no[4]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(5)}} value={no[5]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(6)}} value={no[6]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(7)}} value={no[7]} disabled={(result!=='' && status)}/>
            <input type="button" name='' onClick={()=>{game(8)}} value={no[8]} disabled={(result!=='' && status)}/>
      </div> 
      <h2>{result}</h2>
      <button onClick={reset}>Reset</button>
      {/* <h1>{no}</h1> */}
      
    </>
  )
}

export default Tictoc
