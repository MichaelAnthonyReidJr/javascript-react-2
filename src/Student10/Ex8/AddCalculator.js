import React, { useState } from 'react'

export const AddCalculator = () => {
  let[numberAdded, setNumberAdded] = useState(0)

  const handleClick = (number2Add) =>{
    let result = number2Add + numberAdded
    setNumberAdded(result)
  }
  
    return (
    <div className = 'Main'>
        <button onClick={() => handleClick(1)}>Add 1</button>
        <button onClick={() => handleClick(2)}>Add 2</button>
        <button onClick={() => handleClick(3)}>Add 3</button>
        <p>Total: {numberAdded} </p>
    </div>
  )
}
