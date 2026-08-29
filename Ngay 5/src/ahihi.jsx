import React, { useEffect, useRef, useState } from 'react'

function Ahihi() {
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }
        function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "green";
    }
        function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "red";
    }

  return (
    <div>
      <button onClick={handleClick}>Click me !</button>
      <input ref={inputRef}></input> <br/>

      <button onClick={handleClick2}>Click me 2 !</button>
      <input ref={inputRef2}></input> <br/>

      <button onClick={handleClick3}>Click me 3 !</button>
      <input ref={inputRef3}></input> <br/>
    </div>
  )
}

export default Ahihi
