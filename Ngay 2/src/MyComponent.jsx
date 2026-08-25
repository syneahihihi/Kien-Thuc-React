import React , {useState} from 'react'


function MyComponent() {
  const [name, setName] = useState('Guest');

  const updateName = () => {
    setName('Bahashi');
  }

  const [age, setAge] = useState(0);
  const incrementAge = () => {
    setAge(age + 1);
  }

  const [isStudent, setIsStudent] = useState(true);

  const toggleStudentStatus = () => {
    setIsStudent(!isStudent);
  }

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  } 
  const decrementCount = () => {  
    setCount(count - 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Change Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
        <button onClick={toggleStudentStatus}>Toggle Student Status</button>


        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>Decrement Count</button>
        <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default MyComponent
