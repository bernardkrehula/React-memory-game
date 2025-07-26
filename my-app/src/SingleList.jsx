import './SingleList.css'
const SingleList = ({id, color, setIsClicked, changeSquarePosition}) => {
    
    return(
        <li key={id} style={{backgroundColor: color}} onClick={() => {
            changeSquarePosition();
            setIsClicked(id);
        }}></li>
    )
}

export default SingleList;