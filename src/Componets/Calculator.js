import React, { useState } from 'react'

function Calculator() {
	const [dis,setdis]=useState('');
    const [value1,setvalue1]=useState();
	const [oper,setoper]=useState();
	
	const btnclick=(e)=>{
		setdis(dis.concat(e.target.value))
	}
	
	const action=(a)=>{
		setvalue1(dis)
		setdis(' ')
		setoper(a.target.value)
		 
	}
	
	const ans=()=>{
		if (oper==='+'){
			setdis(parseInt(dis)+parseInt(value1))
		}
		if (oper==='-'){
			setdis(value1-dis)
		}
		if(oper==='X'){
			setdis(dis*value1)
		}
		if(oper==='/'){
			setdis(value1/dis)
		}
	}
	const clear=()=>{
		setdis('')
	}
	const backsapce=()=>{
		setdis(dis.substring(0,dis.length-1))
	}
  return (
    <>
      <div className="main_box">
  <input type="text" Value={dis} className='display'/><br /><br />
  <input type="button" name id="b7" Value={7} onClick={btnclick} />
  <input type="button" name id="b8" Value={8} onClick={btnclick} />
  <input type="button" name id="b9" Value={9} onClick={btnclick} />
  <input type="button" name id="add" Value="+" onClick={action} /><br /><br />
  <input type="button" name id="b4" Value={4} onClick={btnclick} />
  <input type="button" name id="b5" Value={5} onClick={btnclick} />
  <input type="button" name id="b6" Value={6} onClick={btnclick} />
  <input type="button" name id="sub" Value="-" onClick={action}/><br /><br />
  <input type="button" name id="b1" Value={1} onClick={btnclick} />
  <input type="button" name id="b2" Value={2} onClick={btnclick} />
  <input type="button" name id="b3" Value={3} onClick={btnclick} />
  <input type="button" name id="mul" Value="X" onClick={action}/><br /><br />
  <input type="button" name id="b0" Value={0} onClick={btnclick} />
  <input type="button" name id="clear" Value="C" onClick={clear}/>
  <input type="button" name id="ans" Value="=" onClick={ans}/>
  <input type="button" name id="div" Value="/" onClick={action}/><br /><br />
  <input type="button" name id="back" Value="backspace" onClick={backsapce}/>
</div>

    </>
  )
}

export default Calculator
