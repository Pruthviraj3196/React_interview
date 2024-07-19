import React, { useState } from 'react'

const Temperature = () => {

    const[input, setInput] = useState('');
    const[select, setSelect] = useState('Celsius');
    const[converted, setConverted] = useState(0);

    const getvalue = (e) => {
        setInput(e.target.value);
    } 

    const getselect = (e) => {
        setSelect(e.target.value)
        console.log(select);
    }

    // (0°C × 9/5)
    // (32°F − 32) × 5/9

    const converttemp = () => {
        if(select == "Celsius"){
            const cel = (input * 9/5);
            setConverted(cel +" " + "Celsius");
        }else{
            const far = (input - 32) * 5/9;
            setConverted(far +" " + "Fahrenheit");
        }
    }

  return (
    <div>
        <h1>Temperature Converter</h1>
        <div>
            <input onChange={getvalue} type='text' />
            <select value={select} onChange={getselect}>
                <option>Celsius</option>
                <option>Fahrenheit</option>
            </select>
            <button onClick={converttemp}>Convert</button>
        </div>
        <div>
            <p>Converted Temperature: {converted} </p>
        </div>
    </div>
  )
}

export default Temperature