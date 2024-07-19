import React, { useState } from 'react'

const Anagram = () => {
    const[input1, setInput1] = useState("");
    const[input2, setInput2] = useState("");
    const[isAngram, setIsanagram] = useState(false)

    const getinput1 = (e) => {
        setInput1(e.target.value);
    }

    const getinput2 = (e) => {
        setInput2(e.target.value);
    }

    const checkforana = () => {
        const str1 = input1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
        const str2 = input2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
        setIsanagram(str1 === str2);
    }

    let result
    if(isAngram){
        result = <p> is is an Anagram;</p>
    }
    else{
        result = <p>not an Anagram</p>
    }

    
  return (
    <div>
        <div>
            <input onChange={getinput1} type='text' />
            <input onChange={getinput2} type='text' />
            <button onClick={checkforana}>Check for Anagram</button>
            {result}
        </div>
    </div>
  )
}

export default Anagram