import React, {useState} from 'react'

function Car2() {

    const [car, newCar] = useState([]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    function handleAddCar() {
        const newCarObj = {
            year: year,
            brand: brand,
            model: model
        };
        newCar(prevCars => [...prevCars, newCarObj]);
        setYear(new Date().getFullYear());
        setBrand('');
        setModel('');
    }
    function handleRemoveCar(index) {
        newCar(prevCars => prevCars.filter((_, i) => i !== index));
    }

  return (
    <div>
        <h1>Update Array of Object in State</h1>
      <h2>List of Cars</h2>
      <ul>
        {car.map((c, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {c.year} {c.brand} {c.model}
          </li>
        ))}
      </ul>
      <input type='number' placeholder='Enter car year' value={year} onChange={(e) => setYear(e.target.value)}></input>
      <input type='text' placeholder='Enter car brand' value={brand} onChange={(e) => setBrand(e.target.value)}></input>
      <input type='text' placeholder='Enter car model' value={model} onChange={(e) => setModel(e.target.value)}></input>
      <button onClick={handleAddCar}>Add Car</button>

    </div>
  )
}

export default Car2
