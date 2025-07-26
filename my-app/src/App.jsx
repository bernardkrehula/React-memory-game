import { useState } from 'react'
import './App.css'
import Button from './Btn'
import ColorSquares from './ColorSquares';

function App() {
  const [ difficulty, setDifficulty ] = useState('Easy');

  return (
    <>
      <div className='main'>
        <h1 className='title'>Memory game!</h1>
        <p className='subheadline'>The goal of the game is to click on all squares only once! If you click on the same square twice, you loose!</p>
        <div className='game-content'>
          <ul className='difficulty-level'>
            <Button onClick={() => {setDifficulty('Easy')}}>Easy</Button>
            <Button onClick={() => {setDifficulty('Medium')}}>Medium</Button>
            <Button onClick={() => {setDifficulty('Hard')}}>Hard</Button>
          </ul>
          <ColorSquares variation={difficulty}/>
        </div>
      </div>
    </>
  )
}

export default App
