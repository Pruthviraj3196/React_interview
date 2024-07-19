import React from 'react'

const ToastPopup = () => {
  return (
    <div>
        <div>
            <select>
                <option>Left</option>
                <option>Right</option>
            </select>
            <select>
                <option>Top</option>
                <option>Bottom</option>
            </select>
            <select>
                <option>Sucess</option>
                <option>Error</option>
                <option>Wrong</option>
                <option>Info</option>
            </select>
        </div>
        <div>
            <input type='text'/>
            <button>Show Toast</button>
        </div>
    </div>
  )
}

export default ToastPopup