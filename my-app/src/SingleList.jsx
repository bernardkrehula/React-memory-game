import './SingleList.css'
import toast, { Toaster } from 'react-hot-toast';

const SingleList = ({id, color, setIsClicked, isClicked, increaseClickedNum, setIsClickedToFalse, setDisabled}) => {
    

    const notify = () => {
        setDisabled(true)
        toast.error('You lose! Try again!', {duration: 3000})
        setTimeout(() => {
            setIsClickedToFalse();
            setDisabled(false)
        },3000)
    };
    
    
    return(
        <>
            <li style={{backgroundColor: color,}} onClick={() => {
                setIsClicked(id);
                if(isClicked) notify()
                }}>
            </li>
            <Toaster />
        </>
       
    )
}

export default SingleList;