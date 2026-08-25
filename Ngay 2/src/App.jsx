import React from 'react'
import List from './List.jsx'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'

function App() {
      const fruits = [
        { id: 1, name: 'Apple' ,calories: 95},
        { id: 2, name: 'Banana' ,calories: 105},
        { id: 3, name: 'Carrot' ,calories: 41},
    ]
    const vegetables = [
        { id: 4, name: 'Spinach' ,calories: 23},
        { id: 5, name: 'Broccoli' ,calories: 55},
        { id: 6, name: 'Carrot' ,calories: 41},
    ]
  return (
    <div>
      {fruits.length > 0 && <List item={fruits} category="Fruit" />}
      {vegetables.length > 0 && <List item={vegetables} category="Vegetable" />}

      <Button />

      <MyComponent />
    </div>
  )
}

export default App
