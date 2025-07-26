import { useState } from 'react';
import './SingleList.css'
import toast, { Toaster } from 'react-hot-toast';

const SingleList = ({id, color, setIsClicked, isClicked, increaseClickedNum, setClickedNumber, setIsClickedToFalse, setDisabled, changeSquarePosition}) => {
    

    const notify = () => {
        setDisabled(true)
        toast.error('You lose! Try again!', {duration: 3000})
        setTimeout(() => {
            setClickedNumber(0);
            setIsClickedToFalse();
            setDisabled(false)
        },3000)
    };
    
    
    return(
        <>
            <li style={{backgroundColor: color,}} onClick={() => {
                changeSquarePosition();
                setIsClicked(id);
                increaseClickedNum(isClicked);
                if(isClicked) notify()
                }}>
            </li>
            <Toaster />
        </>
       
    )
}

export default SingleList;