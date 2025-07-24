import { useEffect, useRef, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';

const ColorSquares = ({variation}) => {
    const refColor = useRef(null);
    const [ clicked, setClicked ] = useState(false);

    const isClicked = (click) => {
        setClicked(click);
    }
    const changeSquarePosition = () => {
        refColor.current.sort(() => Math.random() - 0.5);
        console.log(refColor.current)
    }

    const generateRandomColor = (difficulty) => {
        /* if(refColor.current !== null) return */
        const randomColor = (squareNumber) => {
            refColor.current = Array.from({ length: squareNumber }).map((el, i) => {
                    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
                    return color;
            })
        }
        console.log('radi')
        switch(difficulty) {
            case 'Easy':
                randomColor(9)
                break;
            case 'Medium':
                randomColor(16)
                break;
            case 'Hard':
                randomColor(25)
                break;

        }
    }

    return(
        <ul className={`colors ${variation}`} onClick={() => changeSquarePosition()}>
            {generateRandomColor(variation)}
            {refColor.current.map((color, index) => {
                return(
                    <SingleList key={index} index={index} color={color} isClicked={isClicked} changeSquarePosition={changeSquarePosition}/>
                )
            })}
        </ul>
    )
}

export default ColorSquares;