import React, { useState } from 'react'

const initialboard = ()=> Array(9).fill(null);

const TicTacToe = () => {

    const[board, setBoard] = useState(initialboard());

    console.log(board);
  return (
    <div className='game'>
        <div className='status'>
            Player X Turn
            <button className='reset-button'>Reset Game</button>
        </div>

        <div className='board'>
            {
                board.map((_,index) => {
                    return <button className='cell' key={index}>X</button>
                })
            }
        </div>
    </div>
  )
}

export default TicTacToe;