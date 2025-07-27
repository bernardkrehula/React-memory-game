import { useEffect, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';


const ColorSquares = ({variation}) => {
    const [ colors, setColors ] = useState([]);
    const [ disabled, setDisabled ] = useState(false);
    
    const setIsClicked = (id) => {
        setColors(prev => prev.map(square => square.id === id ? {...square, isClicked: true } : square))
    }
    const changeSquarePosition = () => {
        setColors(prev => [...prev].sort(() => Math.random() - 0.5));
    }
    //Staviti const koja racuna koliko je colors sa isClicked true
    const sumClicks = colors.filter(color => color.isClicked === true).length;
  
    const setIsClickedToFalse = () => {
        setColors(prev => prev.map(square => ({...square, isClicked: false})))
    }
    //Funckija change difficulty pozivam na klik
    const changeDifficulty = () => {
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
    }
    
    return(
        <>
            <ul className={`colors ${variation}`} onClick={changeSquarePosition} style={{pointerEvents: disabled ? 'none' : 'auto'}}>
                {variation && colors.length === 0 ? changeDifficulty() : ''}
                {colors.map((colorsInfo) => {
                    const { id, color, isClicked } = colorsInfo;
                
                    return(
                        <SingleList key={id} id={id} color={color} isClicked={isClicked} setIsClicked={setIsClicked} setDisabled={setDisabled} setIsClickedToFalse={setIsClickedToFalse}/>
                    )
                })}
            </ul>
            <h2 className='squeares-amount'>Squares Clicked: {sumClicks}/{colors.length}</h2>
        </>
    )
}

export default ColorSquares;