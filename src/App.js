import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React, { useState , useEffect } from 'react';
import AddTodo from './Components/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo =[]; 
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo)=>{
console.log("on delete",todo);
setTodos(todos.filter((e)=>{
  return e!=todo;
}));
localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(Title,Deadline,Dec)=>{
    console.log("adding todo",Title,Deadline,Dec)
   let Sno;
    if(todos.length==0){
      Sno=0;
    }
    else{
      Sno = todos[todos.length-1].Sno +1;
    }
  
    const myTodo={
      Sno: Sno,
      Title:Title,
      Deadline:Deadline,
      Dec:Dec 

  }
  setTodos([...todos,myTodo]);
  console.log(myTodo);
  }
  

  const[todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));

  },[todos])
  return (
 <div >
     <Header/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     
     <Footer />
 
  </div>
  );
}

export default App
