import './SingleList.css'
const SingleList = ({index, color, isClicked, changeSquarePosition}) => {

    return(
        <li key={index} style={{backgroundColor: color}} onClick={() => {
            isClicked(prev  => !prev)
            changeSquarePosition();
        }}></li>
    )
}

export default SingleList;