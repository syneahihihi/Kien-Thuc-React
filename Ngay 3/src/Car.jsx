import React, {useState} from 'react'

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const handleYearChange = (event) => {
        setCar(prevCar => ({
            ...prevCar,
            year: event.target.value
        }));
    }

    const handleColorChange = (event) => {
        setCar(prevCar => ({
            ...prevCar,
            color: event.target.value
        }));
    }

    const handleBrandChange = (event) => {
        setCar(prevCar => ({
            ...prevCar,
            brand: event.target.value
        }));
    }

    const handleModelChange = (event) => {
        setCar(prevCar => ({
            ...prevCar,
            model: event.target.value
        }));
    }
  return (
    <div>
        <h1>Update Object</h1>
        <h2>Your favorite car is: {car.year} {car.color} {car.brand} {car.model}</h2>

        <input type="number" value={car.year} onChange={handleYearChange} />
        <input type="text" value={car.color} onChange={handleColorChange} />
        <input type="text" value={car.brand} onChange={handleBrandChange} />
        <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  )
}

export default Car