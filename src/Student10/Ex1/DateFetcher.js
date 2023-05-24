import React from 'react'
import { useState } from 'react'

export const DateFetcher = () => {
    let [date, setDate] = useState("Unknown")

    return (
        <div className = 'Main'>
        <button onClick = {() => setDate(new Date().toUTCString())}>Push</button>
        UTC Date: { date }
        </div>
    )
}