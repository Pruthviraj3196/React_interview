import React, { useState } from 'react'

const StringTransform = () => {

    const[input, setInput] = useState('');

    const[getco, setGetco] = useState('');

    const getinput = (e) => {
        setInput(e.target.value);
    }

    const lowercase = () => {
       const low = input.toLowerCase();
       setGetco(low);
    }

    const uppercase = () => {
        const up = input.toUpperCase();
        setGetco(up);
    }

    const resetall = () => {
       setInput(' ');
    }

  return (
    <div>
        <h1>String Transform</h1>
        <div>
            <textarea value={input} onChange={getinput} rows={5} cols={65} />
            <button onClick={resetall}>Reset</button>
            <button onClick={lowercase}>Lower Case</button>
            <button onClick={uppercase}>Upper Case</button>

        </div>
        <p>{getco}</p>
    </div>
  )
}

export default StringTransform