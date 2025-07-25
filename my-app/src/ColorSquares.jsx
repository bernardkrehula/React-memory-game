import { useEffect, useRef, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';

const ColorSquares = ({variation, resetRef, emptyRef}) => {
    const refColor = useRef(null);
    const [ clicked, setClicked ] = useState(false);    

    const isClicked = (click) => {
        setClicked(click);
    }
    const changeSquarePosition = () => {
        refColor.current.sort(() => Math.random() - 0.5);
    }
    const generateRandomColor = (difficulty) => {
     
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
    const emptiedRef = () => {
        refColor.current = null;
        console.log('radi')
    }
  
    return(
        <ul className={`colors ${variation}`} onClick={() => changeSquarePosition()}>
            {refColor.current ? '' : generateRandomColor(variation)}
            {refColor.current.map((color, index) => {
                return(
                    <SingleList key={index} index={index} color={color} isClicked={isClicked} changeSquarePosition={changeSquarePosition}/>
                )
            })}
        </ul>
    )
}

export default ColorSquares;