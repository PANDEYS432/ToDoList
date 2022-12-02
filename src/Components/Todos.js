import React from 'react'
import TodoItem  from './TodoItem'
export default function Todos(props)  {
    let myStyle ={
        minHeight:"70vh",
        margin: "10px 16px"
    }
  return (
    <div className='container m-6 ' style={myStyle}>
        
        {props.todos.length===0?<div className='text-center font-bold text-2xl'>"No Task To Display!"</div>:
        props.todos.map((todo)=>{
            return ( <div> 
                
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </div>
            )
        })
        
        }
      
    </div>
  )
}


