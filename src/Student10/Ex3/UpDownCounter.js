import React, {useState} from 'react'

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0)
    
    const handleClick = (direction) =>{
        if (direction === "Up"){
            setCounter(++counter)
        }
        else if (direction === "Down"){
                setCounter(--counter)
        }
    }
    
        return (
            <div className= 'Main'>
                <button onClick = {() => {handleClick("Down")}}>Down</button>
                {counter}
                <button onClick = {() => {handleClick("Up")}}>Up</button>
            </div>
        )
    }