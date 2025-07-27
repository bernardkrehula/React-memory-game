import { useState } from 'react'
import './App.css'
import Button from './Btn'
import ColorSquares from './ColorSquares';

function App() {
  const [ difficulty, setDifficulty ] = useState('Easy');
  const [ colors, setColors ] = useState([]);
  
   const changeDifficulty = (variation) => {
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
    if(colors.length === 0) changeDifficulty(difficulty)

  return (
    <>
      <div className='main'>
        <h1 className='title'>Memory game!</h1>
        <p className='subheadline'>The goal of the game is to click on all squares only once! If you click on the same square twice, you loose!</p>
        <div className='game-content'>
          <ul className='difficulty-level'>
            <Button onClick={() => {setDifficulty('Easy'); changeDifficulty('Easy');}}>Easy</Button>
            <Button onClick={() => {setDifficulty('Medium'); changeDifficulty('Medium');}}>Medium</Button>
            <Button onClick={() => {setDifficulty('Hard'); changeDifficulty('Hard');}}>Hard</Button>
          </ul>
          <ColorSquares variation={difficulty} colors={colors} setColors={setColors}/>
        </div>
      </div>
    </>
  )
}

export default App
