import React from 'react'

function Button() {
    let count = 0;
    const handleClick2 = () => {
        if(count < 5) {
            count++;
            alert('Button clicked! ' +  count + ' times');
        }else{
            alert('Button clicked! Maximum limit reached.');
           }   }
    const handleClick = () => {
        alert('Button clicked!');
    }
    const handleClick1 = (e) => {
        e.target.textContent = 'HIHI!';
    }
  return (
    <div>
      <button onClick={handleClick2}>Click me!😜</button>
      <button onClick={(e) => handleClick1(e)}>dcm😜</button>
    </div>
  )
}

export default Button
