import { useEffect, useRef, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';

const ColorSquares = ({variation}) => {
    const [ colors, setColors ] = useState([]);
    const [ clicked, setClicked ] = useState(false);    

    const isClicked = (click) => {
        setClicked(click);
    }
    const changeSquarePosition = () => {
        setColors(prev => [...prev].sort(() => Math.random() - 0.5));
    }

    useEffect(() => {
        const randomColor = (count) => {
            const newColors = Array.from({ length: count }, () => "#" + Math.floor(Math.random() * 16777215).toString(16));
            setColors(newColors)
        }
     
        switch(variation) {
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
    }, [variation])
     
        
 
    return(
        <ul className={`colors ${variation}`} onClick={() => changeSquarePosition()}>
            {colors.map((color, index) => {
                return(
                    <SingleList key={index} index={index} color={color} isClicked={isClicked} changeSquarePosition={changeSquarePosition}/>
                )
            })}
        </ul>
    )
}

export default ColorSquares;