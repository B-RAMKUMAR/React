import React, { useState } from 'react'
export const Content = () => {
  const [name,setName]=useState("Earn");  
  function handle(){
        const name=["Earn","Grow","give"];
        const int=Math.floor(Math.random()*3);
        setName(name[int])
      }
      /*
      const handleClick = (e) => {
        console.log(e.target.innerText)
      }*/

      function namee(){
        console.log("hi");
      }
      const [count, setCount]=useState(99);
      //const [name,setName]=useState(()=>namee())
      function incrementFunction(){
        setCount(prevCount=>prevCount + 1)
      }
      function decrementFunction(){
        setCount(prevCount=>prevCount - 1)
      }
      return (
    <main>
    <p> lets {name} money</p>
    <button onClick={handle}> Subscribe    </button>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction} >+</button>
    </main>
  )
}
