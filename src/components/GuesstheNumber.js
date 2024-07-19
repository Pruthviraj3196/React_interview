import React, { useEffect, useState } from 'react'

const GuesstheNumber = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] =useState('Try to guess the number');
  const [randomnum, setRandomnum] = useState(0);

  const getinputval = (e) => {
    setInput(e.target.value);
  }


  useEffect(()=>{
    const randomvalue = Math.floor(Math.random()*100);
    setRandomnum(randomvalue);
  },[])
  

  const checkvalue = () => {
    console.log(randomnum);
    if(input == randomnum){
      setMessage("Congratulations you Gueesed the Number ya huiii");
    }else if(input > randomnum){
      setMessage("The number is smaller");
    }else{
      setMessage("The number is greater");
    }
  }

  return (
    <div>
      <div>
        <h1>Guess the Number</h1>
        <div>
          <input value={input} onChange={getinputval} type='number' />
          <button>Reset</button>
          <button onClick={checkvalue}>Check</button>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default GuesstheNumber