import React, { useState } from 'react'

const Counter = () => {
  const [countVal, setCountVal] = useState(0);
  const [input, setInput] = useState(1);


  const increment = () => {
    setCountVal(countVal+input)
  }

  const decrement = () => {
    setCountVal(countVal-input)
  }

  const getinputval = (e) => {
    setInput(Number(e.target.value));
    console.log(input);
  }

  return (
    <div>
        <div>
            <p>{countVal}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <p>Increment by </p>
            <input onChange={getinputval} value={input} type='number' />
        </div>
    </div>
  )
}

export default Counter