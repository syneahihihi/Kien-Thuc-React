import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB';
import './Component.css';

export const MyContext = createContext();

function ComponentA() {
  const [user, setUser] = useState('Bahashi');

  return (
    <div className='component-demo'>
      <div className='component component-a'>
        <h1>Component A</h1>
        <h2>Hello {user}</h2>
        <MyContext.Provider value={user}>
          <ComponentB user={user} />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default ComponentA;
