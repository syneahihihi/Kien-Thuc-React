import React, { useEffect, useState } from 'react'

// useEffect sẽ giúp hiển thị những phần phụ của chức năng (API, dom, time) bên trong functional component

function MyComponent() {
    const [count, setCount]=useState(0);
    const [color,setColor]=useState('green');

    useEffect(()=>{
        document.title= `Count: ${count} ${color}`;
    },[count,color]);  // Ở đây useEffect chạy lần đầu và chạy lại mỗi giá trị khi phần value thay đổi

    function addCount(){
        setCount(c=> c+1);
    }
    function subtractionCount(){
        setCount(c=> c-1);
    }
    function changeColor(){
        setColor(c => c ==='green' ? 'red': 'green' );
    }


    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTENER REMOVED");
    }
    }, []); //Ở đây useEffect chỉ chạy 1 lần duy nhất sau khi render đầu tiên kích hoạt

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
    <div>
      <h1 style={{color:color}}>Count: {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractionCount}>Subtraction</button>
      <button onClick={changeColor}>Change Color</button>
        <h2>Width: {width}</h2>
        <h2>Height: {height}</h2>
    </div>
  )
}

export default MyComponent
