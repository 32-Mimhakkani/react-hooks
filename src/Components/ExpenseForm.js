import React, { useState } from 'react';

const ExpenseForm = ({data,setDatas}) => {
    const[name,setName]=useState('')
    const[roll,setRoll]=useState('')
    const[message,setMessage]=useState('')
    const[date,setDate]=useState('')
  
    const handlename=(e)=>{
       const Name = e.target.value
       setName(Name)
    }
    const handleroll=(e)=>{
        setRoll(e.target.value)
     
    }
    const handlemessage=(e)=>{
        setMessage(e.target.value) 
   
    }
    const datehandle =(e)=>{
        setDate(e.target.value)
    }
const handleSubmit =(e)=>{
    e.preventDefault()

   const createobj ={
       Name:name,
       Roll:roll,
       Message:message,
       Date:date
   }
    

  setDatas([createobj,...data])
  console.log(data);

  setName('')
  setRoll('')
  setMessage('')
  setDate('')
    
}
   

    return (
        <div>
           <form onSubmit={handleSubmit}>
                name : <input onChange={handlename} value ={name} type="text" ></input>
                Roll : <input onChange={handleroll} value={roll} type="text" ></input>
                Message : <input onChange={handlemessage} value={message} type="text"></input>
                <input type ="date" onChange={datehandle} value={date} />
                <input type="submit" />
           </form>
        </div>
    );
};

export default ExpenseForm;