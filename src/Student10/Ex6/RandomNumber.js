import React, { useState } from 'react'



export const RandomNumber = () => {
    let [randomNumber, setRandomNumber] = useState(null)
    
    const generateRandomNumberClick = () => {
        let randomGenerated = Math.floor(Math.random() * 11);
        setRandomNumber(randomGenerated)
    }

  return (
    <div className = 'Main'>
        <div>Random Number: { randomNumber }</div>
        <button onClick = {() => generateRandomNumberClick()}>Generate</button>
    </div>
  )
}
