import React, { useEffect, useState } from 'react';

export default function Header() {
  const [quote,setQuote]= useState("");
  const [author,setAuthor]= useState("");
  let fetchQuote = () => {
    fetch("https://favqs.com/api/qotd")
    .then(res => res.json())
    .then(
        (qotd_date) => {
            setQuote(qotd_date.quote.body);
            setAuthor(qotd_date.quote.author);
            console.log(qotd_date);
        }
    )
  }
  useEffect(()=> {
   fetchQuote();
},[]);
  
  return (

     <header >
      <div className="bg-grey-400 shadow-lg h-20 bg-black text-white">
    <h1 className="font-bold text-3xl text-center " >TO-DO LIST </h1>
    {/* <p className="font-normal text-white test-lg text-center" >  If you know you can Do Better,
    then Do better. 
   </p> */}
   <button className="btn" onclick={fetchQuote}>Motivation</button>
    </div>
    
    </header>
  
  )
}