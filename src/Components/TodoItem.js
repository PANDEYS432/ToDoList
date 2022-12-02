import React from 'react'

export default function TodoItem({todo ,onDelete }) {
  return (
    <div>
      <h4>{todo.Title}</h4>
      <h4>{todo.Deadline}</h4>
      <p>{todo.Dec}</p>
       <button className="btn bg-red-500 p-2 h-8" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
