import React, { useState } from 'react'

export const TenCounter = () => {
    let [counter, setCounter] = useState(0)
    
    const handleClick = ({counter}) => { 
        if (counter === 10){
            setCounter(0);
        } else { 
            setCounter(++counter);
        }

    }
    return (
        <div className = 'Main'>
                <button onClick={() => handleClick({counter})}>Push</button>
                 Counter: {counter}

        </div>

    )
}