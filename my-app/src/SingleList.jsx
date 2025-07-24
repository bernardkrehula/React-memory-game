import './SingleList.css'
const SingleList = ({index, color, isClicked, changeSquarePosition}) => {

    return(
        <li key={index} style={{backgroundColor: color}} onClick={() => {
            changeSquarePosition();
        }}></li>
    )
}

export default SingleList;