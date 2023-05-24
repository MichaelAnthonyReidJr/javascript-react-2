import React from "react"

import { useState } from "react"

export const TenCounter = () => {
  let [counter, setCounter] = useState(0)
  const handleOnClick = ({counter}) => {
    if (counter === 10) {
      setCounter(0)
    } else {
      setCounter(++counter)
    }
  }

  return (
    <div className="Main">
      <button onClick = {() => handleOnClick()}>Push</button>
      Counter:{counter}
    </div>
  )
}
