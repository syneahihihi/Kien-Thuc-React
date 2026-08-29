import React, { useContext } from 'react';
import { MyContext } from './ComponentA';

function ComponentD() {
  const user = useContext(MyContext);

  return (
    <div className='component component-d'>
      <h1>Component D</h1>
      <h2>Bye {user}</h2>
    </div>
  );
}

export default ComponentD;
