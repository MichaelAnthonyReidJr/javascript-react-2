import React, { useState } from 'react'

export const NumberBuilder = () => {
    let [numbers, setNumbers] = useState([])
   // let [printedNumber, setPrintedNumber] = useState(0)

    const handleClick = (buttonType) => {
        if (buttonType === "Add Number"){
            setNumbers([...numbers, numbers.length + 1])
        }
        else {
            setNumbers(0)
        }
    }
    
    return (
        <div className = 'Main'>
        <button onClick = {() => {handleClick('Add Number')}}>Add Number</button>
        <button onClick = {() =>{handleClick('Reset')}}>Reset</button>
        <br/>
        Numbers: { numbers.join(' ') }
        </div>
    )
       
}