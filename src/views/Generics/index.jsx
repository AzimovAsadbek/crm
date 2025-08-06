import React from 'react'
import { useLocation } from 'react-router-dom'

const Generics = () => {
    const location = useLocation()
    return (
        <div>
            <h1>{location.pathname}</h1>
            <h1>Comming soon...</h1>
        </div>
    )
}

export default Generics
