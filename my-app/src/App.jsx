import { useState } from 'react'
import './App.css'
import Button from './Btn'

function App() {
  

  return (
    <>
      <div className='main'>
        <h1 className='title'>Memory game!</h1>
        <p className='subheadline'>The goal of the game is to click on all squares only once! If you click on the same square twice, you loose!</p>
        <div className='game-content'>
          <ul className='difficulty-level'>
            <Button>Easy</Button>
            <Button>Medium</Button>
            <Button>Hard</Button>
          </ul>
          <ul className='colors'>
            
          </ul>
          <h2 className='squeares-amount'>Squares Clicked: 0/9</h2>
        </div>
      </div>
    </>
  )
}

export default App
