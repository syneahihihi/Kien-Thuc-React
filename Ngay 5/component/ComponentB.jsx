import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { MyContext } from './ComponentA';

function ComponentB() {
  const value = useContext(MyContext);

  return (
    <div className='component component-b'>
      <h1>Component B</h1>
      <h2>Hello {value}</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
