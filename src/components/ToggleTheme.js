import React, { useState } from 'react'

const ToggleTheme = () => {
    const [toggle,setToggle] = useState(false);

    const handlechange = () => {
        setToggle(!toggle);
    }

  return (
    <div>
        <div style={{
             backgroundColor: toggle ? 'black' : 'white',
             color: toggle ? 'white' : 'black',
        }}>
            <p>Try to toggle the theme and see the change !!!</p>
            <button onClick={handlechange}>Try it now</button>
        </div>
    </div>
  )
}

export default ToggleTheme