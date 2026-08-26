import React ,{useState} from 'react'

function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    function handleColorChange(event) {
        setColor(event.target.value);
    }
  return (
    <div>
        <div className='color-picker' style={{backgroundColor: color}}>
            <h2>Color: {color}</h2>
        </div>
            <h2>Select Color</h2>
        <input className='input-color' type='color' value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker