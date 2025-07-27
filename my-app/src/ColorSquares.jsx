import { useEffect, useState } from 'react';
import './ColorSquares.css'
import SingleList from './SingleList';


const ColorSquares = ({variation, colors, setColors}) => {
    const [ disabled, setDisabled ] = useState(false);
    
    const setIsClicked = (id) => {
        setColors(prev => prev.map(square => square.id === id ? {...square, isClicked: true } : square))
    }
    const changeSquarePosition = () => {
        setColors(prev => [...prev].sort(() => Math.random() - 0.5));
    }
    const sumClicks = colors.filter(color => color.isClicked === true).length;
  
    const setIsClickedToFalse = () => {
        setColors(prev => prev.map(square => ({...square, isClicked: false})))
    }
    //Funckija change difficulty pozivam na klik
   
    return(
        <>
            <ul className={`colors ${variation}`} onClick={changeSquarePosition} style={{pointerEvents: disabled ? 'none' : 'auto'}}>
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