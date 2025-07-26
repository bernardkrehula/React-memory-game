import { useEffect, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';


const ColorSquares = ({variation}) => {
    const [ colors, setColors ] = useState([]);
    const [ clickedNumber, setClickedNumber ] = useState(0);
    const [ disabled, setDisabled ] = useState(false);   

    const setIsClicked = (id) => {
        setColors(prev => prev.map(square => square.id === id ? {...square, isClicked: true } : square))
    }
    const changeSquarePosition = () => {
        setColors(prev => [...prev].sort(() => Math.random() - 0.5));
    }
    const increaseClickedNum = (isClicked) => {
        setClickedNumber(prev => {
            return !isClicked ? prev + 1 : prev;
        }) 
    }
    const setIsClickedToFalse = () => {
        setColors(prev => prev.map(square => ({...square, isClicked: false})))
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

            setClickedNumber(0)
    }, [variation])
 
    return(
        <>
            <ul className={`colors ${variation}`} onClick={() => changeSquarePosition()} style={{pointerEvents: disabled ? 'none' : 'auto'}}>
                {colors.map((colorsInfo, index) => {
                    const { id, color, isClicked } = colorsInfo;
                
                    return(
                        <SingleList key={id} id={id} color={color} isClicked={isClicked} setIsClicked={setIsClicked}  setClickedNumber={setClickedNumber} setDisabled={setDisabled} setIsClickedToFalse={setIsClickedToFalse} increaseClickedNum={increaseClickedNum} changeSquarePosition={changeSquarePosition}/>
                    )
                })}
            </ul>
            <h2 className='squeares-amount'>Squares Clicked: {clickedNumber}/9</h2>
        </>
    )
}

export default ColorSquares;