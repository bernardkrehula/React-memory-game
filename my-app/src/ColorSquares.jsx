import { useEffect, useRef, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';

const ColorSquares = ({variation}) => {
    const [ colors, setColors ] = useState([]);   

    const setIsClicked = (id) => {
        setColors(prev => prev.map(square => square.id === id ? {...square, isClicked: true } : square))
    }
    const changeSquarePosition = () => {
        setColors(prev => [...prev].sort(() => Math.random() - 0.5));
    }
    
    useEffect(() => {
        const randomColor = (count) => {
            const newColors = Array.from({ length: count }).map((_, index) => ({
                id: crypto.randomUUID(),
                color: "#" + Math.floor(Math.random() * 16777215).toString(16),
                isClicked: false
            }));
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
            {colors.map((colorsInfo, index) => {
                const { id, color, isClicked } = colorsInfo;
               
                return(
                    <SingleList key={id} id={id} color={color} setIsClicked={setIsClicked} changeSquarePosition={changeSquarePosition}/>
                )
            })}
        </ul>
    )
}

export default ColorSquares;