import React, { useContext } from 'react';
import ComponentD from './ComponentD';
import { MyContext } from './ComponentA';

function ComponentC() {
  const user = useContext(MyContext);

  return (
    <div className='component component-c'>
      <h1>Component C</h1>
      <h2>Hello {user}</h2>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
