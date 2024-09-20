import React, { useState } from 'react'

function Todo() {

  const [value,setvalue]=useState('')
  const [todo,settodo]=useState([])
  const [res,setres]=useState(false)
  const [upid,setupid]=useState()
  // const demo=[...value]
  const print=()=>{
    if(res){
      let newData=[...todo]
      newData[upid]=value
      settodo(newData)
      setres(false)
      setvalue('')
    }
    else{
      settodo([...todo,value])
    setvalue('')
    }
   
  }

  const edit=(ind)=>{
    // const dataedit=todo.filter((item)=>{
    //   return item ===ind
    // })
    // setvalue(dataedit)
    setvalue(todo[ind])
    setupid(ind)
    setres(true)
   
  }

  const del=(val)=>{
   
    // const newdata = [...value];
    // newdata.slice(index,1);
    // settodo(newdata);
    const newdata=todo.filter((item)=>{
      return item !==val
    })
    settodo(newdata)
    // alert()  
  }
  return (
    <>
      <div>
      <div className='bg_color'>
            <div>
                <div className='main_part'>
                        <form action="" className='from_sec'>
                        <input type="text" placeholder='Add Item' onChange={(e)=>{setvalue(e.target.value)}} value={value}/>
                        <input type="button" value={(res)?'Update':'Add'} className='btn' onClick={print}/>
                        
                            
                        </form>
                        <div>
                	        {/* <div className='content' >{todo}</div>
                          <span>
                          <button className='btn btn1'>Edit</button>
                          <button className='btn btn2'>Delete</button>
                          </span> */}
                            <ul>
                              {
                                todo.map((item,ind)=>{
                                  return(
                                    <li className='content'>
                                      <span>{item}</span>
                                      <span>
                              <button className='btn btn1' onClick={()=>edit(ind)}>Edit</button>
                          <button className='btn btn2' onClick={()=>del(item)}>Delete</button>
                              </span>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          
                          {/* {
                            todo.map((item)=>{
                              return(
                                
                            
                            
                          
                              )
                            })
                          } */}
                         
                          {/* <ul>
                          <li className='content'>
                              <span>{todo}</span>
                              <span>
                              <button className='btn btn1'>Edit</button>
                          <button className='btn btn2'>Delete</button>
                              </span>
                            </li>
                          </ul> */}
                        </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
