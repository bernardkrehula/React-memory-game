import { useRef, useState } from 'react';
import './ColorSquares.css'

const ColorSquares = ({variation}) => {
    const refColor = useRef(null)

    const generateRandomColor = (difficulty) => {
        switch(difficulty) {
            case 'Easy':
                refColor.current = Array.from({ length: 9 }).map((el, i) => {
                    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    return color;
                })
                break;
            case 'Medium':

                break;
            case 'Hard':

                break;

        }


        const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log(refColor)
    }

    return(
        <ul className={`colors ${variation}`} onClick={() => generateRandomColor(variation)}>
            {generateRandomColor(variation)}
            {refColor.current.map((color, index) => {
                return(
                    <li key={index} style={{backgroundColor: color}}></li>
                )
            })}
        </ul>
    )
}

export default ColorSquares;