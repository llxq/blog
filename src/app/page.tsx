'use client'
import React from 'react'
import { useState } from 'react'

const AppPage = () => {
    const [count, setCount,] = useState( 0 )
    return (
        <div className="container">
            { count }
            <h1 onClick={ () => {setCount(count => count + 1)} }>App Page</h1>
        </div>
    )
}

export default AppPage
