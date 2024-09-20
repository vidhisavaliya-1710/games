import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Result() {
  const [value,setvalue]=useState([])
  const [rno,setrno]=useState('')
  const [name,setname]=useState('')
  const [sub1,setsub1]=useState('')
  const [sub2,setsub2]=useState('')
  const [sub3,setsub3]=useState('')
  const [sub4,setsub4]=useState('')
  const [sub5,setsub5]=useState('')
  const [upid,setupid]=useState()
  const [editid,seteditid]=useState(false)
  // const [total,settotal]=useState('')

 
  const data=()=>{
    
    const newData={
      rno,
      name,
      marks:[sub1,sub2,sub3,sub4,sub5],
      total:[parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5)],
      per:[(parseInt(sub1)+parseInt(sub2)+parseInt(sub3)+parseInt(sub4)+parseInt(sub5))/5]
    };
    if(editid){
      // let newinput=[...newData]
      const updatetask=value.map((item,ind)=>ind===edit ? newData:item)
      // newinput[upid]=value
      setvalue(updatetask)
      seteditid(false)
      setvalue('')
    }
    else{
      setvalue([...value,newData])
    }
    setrno('')
    setname('')
    setsub1('')
    setsub2('')
    setsub3('')
    setsub4('')
    setsub5('')
    
    
    
  }

  const del=(val)=>{
    const newdata=value.filter((item)=>{
      return item !== val
    })
    setvalue(newdata)
  }

  const edit=(ind)=>{
    setupid(ind)
    
    // setvalue(value[ind])
    const items=value[ind]
    setrno(items.rno)
    setname(items.name)
    setsub1(items.marks[0])
    setsub2(items.marks[1])
    setsub3(items.marks[2])
    setsub4(items.marks[3])
    setsub5(items.marks[4])
    seteditid(true)
  }

  return (
    <>
      <div className='bg_sec' >
        <div className='pt-4 pb-4'>
            <h1 className='text-center'>Student Result</h1>
            <form action="" className='text-center mt-4 mb-4'>
                <label htmlFor="" className='fs-5 fw-bold'>Roll No:</label>
                <input type="text" className='text' onChange={(r)=>{setrno(r.target.value)}} value={rno}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Name:</label>
                <input type="text" className='text' onChange={(n)=>{setname(n.target.value)}} value={name}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Sub 1:</label>
                <input type="text" className='text' onChange={(s)=>{setsub1(s.target.value)}} value={sub1}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Sub 2:</label>
                <input type="text" className='text' onChange={(s1)=>{setsub2(s1.target.value)}}  value={sub2}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Sub 3:</label>
                <input type="text" className='text' onChange={(s2)=>{setsub3(s2.target.value)}}  value={sub3}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Sub 4:</label>
                <input type="text" className='text' onChange={(s3)=>{setsub4(s3.target.value)}}  value={sub4}/><br/><br/>
                <label htmlFor="" className='fs-5 fw-bold'>Sub 5:</label>
                <input type="text" className='text' onChange={(s4)=>{setsub5(s4.target.value)}} value={sub5}/><br/><br/>
                <input type="button" value='submit' className='btn3' onClick={data}/>
            </form>

            <Table striped bordered hover className='text-center'>
            <thead>
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Sub 1</th>
                    <th>Sub 2</th>
                    <th>Sub 3</th>
                    <th>Sub 4</th>
                    <th>Sub 5</th>
                    <th>Total</th>
                    <th>Per</th>
                    <th><FaEdit className='fs-5'/></th>
                    <th><MdDelete className='fs-4'/></th>
                  </tr>
                </thead>
        
          {
            value.map((item,ind)=>{
              return(
                
                
                <tbody>
                   <tr>
                      <td>{item.rno}</td>
                      <td>{item.name}</td>
                      {
                        item.marks.map((mark)=>{
                          return(
                          
                            <td>{mark}</td>
                            
                          )
                          
                        })
                      }
                     {
                       item.total.map((totalmarks)=>{
                        return(
                          <td>{totalmarks}</td>
                        )
                       })
                     }
                      {
                        item.per.map((pertcentag)=>{
                          return(
                            <>
                            <td>{pertcentag}%</td>
                            <td><FaEdit className='fs-5' onClick={()=>{edit(ind)}}/></td>
                            <td><MdDelete className='fs-4' onClick={()=>{del(item)}}/></td>
                            </>
                          )
                        })
                      }
                   </tr> 
                   </tbody>
            
              )
            })
          }
          </Table>
          {/* <td>{value}</td>
          <td>{print}</td>
          <td>{res1}</td>
          <td>{res2}</td>
          <td>{res3}</td>
          <td>{res4}</td>
          <td>{res5}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td> */}
        
     
        </div>
      </div>
    </>
  )
}

export default Result
