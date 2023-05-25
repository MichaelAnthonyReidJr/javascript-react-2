import React, { useState } from 'react'

export const CarCounter = () => {
  let [fordCounter, setFordCounter] = useState(0)
  let [toyotaCounter, setToyotaCounter] = useState(0)
  let [chevyCounter, setChevyCounter] = useState(0)
  let [totalCars, setTotalCars] = useState(0)
  
  const handleClick = (carBrand) => {
    
    switch (carBrand) {
        
        case "Ford": 
            setFordCounter(++fordCounter)
            break;
        
        case "Toyota": 
            setToyotaCounter(++toyotaCounter)
            break;
        
        case "Chevy": 
            setChevyCounter(++chevyCounter)
            break;
        
        default: 
            break;
    }
        setTotalCars(++totalCars)    
    };

    return (
        <div className = 'Main'>
        <button onClick = {() => handleClick("Ford")}>Ford</button>
        <button onClick = {() => handleClick("Toyota")}>Toyota</button>
        <button onClick = {() => handleClick("Chevy")}>Chevy</button>
        <p>Ford: {fordCounter}</p>
        <br/>
        <p>Toyota: {toyotaCounter}</p>
        <br/>
        <p>Chevy: {chevyCounter}</p>
        <br/>
        <p>TOTAL: {totalCars}</p>


        </div>
  )
}
