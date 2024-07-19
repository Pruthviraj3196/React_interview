import React, { useState } from 'react'

const WordCount = () => {

    const[input, setInput] = useState();
    const[chars, setChars] = useState(0);
    const[word, setWord] = useState(0);
    const[paras, setParas] = useState(0);

    const getvalue = (e) => {
        setInput(e.target.value);
    }
    
    const calaculatevalues = () => {
        setChars(input.length);
        const wrd =  input.trim().split(/\s+/).filter(word => word).length;
        const para = input.split(/\n+/).filter(paragraph => paragraph).length;
        setWord(wrd);
        setParas(para);

    }

    return (
        <div>
            <h1>Word Count</h1>
            <div>
                <textarea onChange={getvalue} typeof='text' rows={5} cols={30}/>
                <p>word: {word}</p>
                <p>chars: {chars}</p>
                <p>Paras: {paras}</p>
                <button onClick={calaculatevalues}>Count</button>
                <button>Clear</button>
            </div>
        </div>
    )
}

export default WordCount