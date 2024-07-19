import React, { useState } from 'react'

const Colourchnage = () => {

    const [bgcolor, setBgcolor] = useState('#ffffff');

    const changecolour = () => {
        const randomcolour ='#' + Math.floor(Math.random()*16777215).toString(16);
        
        setBgcolor(randomcolour)
    }

  return (
    <div style={{backgroundColor:bgcolor}}>
        <button onClick={changecolour}>Change Bg Colour</button>
    </div>
  )
}

export default Colourchnage