import React, { useState } from 'react';

const images = [
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=2210&quality=70",
    "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_960_720.jpg"
]

const Slider = () => {

    const[activeState, setActiveState] = useState(0);

    const handlenext = () => {
       if(activeState === images.length - 1){
        setActiveState(0);
       }else{
        setActiveState((activeState) => activeState +1 );
       }
    }

    const handleprevious = () => {
        if(activeState === 0){
            setActiveState(images.length -1 )
        }else{
            setActiveState((activeState) => activeState -1)
        }
    }
  return (
    <div>
        <div className='imges'>
            <img src={images[activeState]} />
        </div>
        <button onClick={handlenext}>Next</button>
        <button onClick={handleprevious}>Previous</button>
    </div>
  )
}

export default Slider