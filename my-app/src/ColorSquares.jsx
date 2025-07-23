import { useRef, useState } from 'react';
import './ColorSquares.css'

const ColorSquares = ({variation}) => {
    const refColor = useRef(null)


    return(
        <ul className={`colors ${variation}`}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default ColorSquares;