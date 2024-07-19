import React, { useState } from 'react'


const images = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600"
]

const Imagega = () => {

    const [selectedimg, setSelectedimg] = useState();

    const handleselect = (img) => {
        setSelectedimg(img);
        console.log(selectedimg);
    }

  return (
    <div>
        <div className='images'>
            {
                images.map((img,index)=> (
                   <div key={index} onClick={() => handleselect(img)}>
                    <img src={img} />
                   </div>
                ))
            }
        </div>
        {
            selectedimg && (
                <div>
                    <h2>Selected img</h2>
                    <img src={selectedimg}/>
                </div>
            )
        }
        <div>

        </div>
    </div>
  )
}

export default Imagega