import React, { useState } from 'react'

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0)
    let [minNumber, setMinNumber] = useState(0)
    let [maxNumber, setMaxNumber] = useState(0)
    
    const handleClick = (direction) =>{
        if (direction === "Up"){
            setCounter(++counter)
            if (counter > maxNumber){
                setMaxNumber(counter);
            }
        }else{
                setCounter(--counter)
                if (counter < minNumber){
                    setMinNumber(counter);
                }
        }
    }
        return (
            <div className= 'Main'>
                <button onClick = {() => {handleClick("Down")}}>Down</button>
                {counter}
                <button onClick = {() => {handleClick("Up")}}>Up</button>
                <br/>
                <p>Min: {minNumber}</p>
                <br/>
                <p>Max: {maxNumber}</p>
            </div>
        )
    }