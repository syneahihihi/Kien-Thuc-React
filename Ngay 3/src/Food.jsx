import React, {useState} from 'react'

function Food() {
    const [food, setFood] = useState(["Burger", "Pizza", "Pasta", "Salad"]);
    function handleAddFood() {
        const newFood = document.getElementById('foodChange').value;
        document.getElementById('foodChange').value = '';

        setFood(f=>[...f, newFood]);
    }
    function handleRemoveFood(index) {
        setFood(f => f.filter((_, i) => i !== index));
    }

  return (
    <div>
        <h1>Add and Remove Food (Update ARRAY in State)</h1>
        <h1>List of Food</h1>
        <ul>
            {food.map((item, index) => (
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {item}
                </li>
            ))}
        </ul>

        <input type='text' id='foodChange' placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default Food