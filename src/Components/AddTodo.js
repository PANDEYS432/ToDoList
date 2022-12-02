import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [Title,setTitle]= useState("");
    
    const [Deadline,setDeadline]= useState("");
    
    const [Dec,setDec] = useState("");

    const submit =(e)=>{
    e.preventDefault();
    if(!Title || !Dec || !Deadline){
        alert("Title, Description or Date can't be blank! ")
    }
    else{
    addTodo(Title,Deadline,Dec);
    setTitle("");
    setDeadline("");
    setDec("");
    
    }
    }
  return (
    <div className='container m-6 ' >
        <h4 className='font-bold text-xl'>Add a Todo</h4>
         <form onSubmit={submit}>
      <div className='mb-3'>
        <label form='Title' className='form-label'> Todo Title  </label>
        <input type='text'value={Title} onChange={(e)=>{setTitle(e.target.value)}} className='form-control' id='Title'></input>
      </div>
      <div>
        <label form='Deadline' className='form-label'> Deadline  </label>
        <input type="date" value={Deadline} onChange={(e)=>{setDeadline(e.target.value)}} className='form-control' id='Deadline'></input>
      </div>
      <div className='mb-3'>
        <label form='Dec' className='form-label'> Todo Description  </label>
        <input type='text' value={Dec} onChange={(e)=>{setDec(e.target.value)}} className='form-control' id='Dec'></input>
      </div>
      <div className='mb-3 form-check'>
       
        <input type='checkbox' className='form-check-input' id='check'></input>
        <label className='form-check-label' htmlFor='check'>Completed</label>
      </div>
      <button type='submit' className="btn bg-green-500 h-8">Add Todo</button>
         </form>
    </div>
  )
}

export default AddTodo
