import React, { useState } from 'react'

export const Buttons = () =>{
    let[buttonName1, setButtonName1]= useState('Push')
    let[buttonName2, setButtonName2]= useState('Push')
    
    const handleClick= (status) => {
        
        switch (status){
            case 'B1':
                setButtonName1('Pushed')
                break;
            case 'B2':
                setButtonName2('Pushed')
                break;
            case 'Reset':
                setButtonName1('Push')
                setButtonName2('Push')
                break;
            default: 
                break;
        }
    }
    return (
    <div className = 'Main'>
        <button onClick= {() => handleClick('B1')}>{ buttonName1 }</button>
        <br/>
        <button onClick= {() => handleClick('B2')}>{ buttonName2 }</button>
        <br/>
        <button onClick= {() => handleClick('Reset')}>Reset</button>
    </div>
  )
}