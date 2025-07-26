import './SingleList.css'
const SingleList = ({id, color, setIsClicked, isClicked, increaseClickedNum, changeSquarePosition}) => {
    
    return(
        <li key={id} style={{backgroundColor: color}} onClick={() => {
            changeSquarePosition();
            setIsClicked(id);
            increaseClickedNum(isClicked);
        }}></li>
    )
}

export default SingleList;