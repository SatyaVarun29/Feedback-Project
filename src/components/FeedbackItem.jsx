import React  from "react";
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Card from "./shared/Card";

const FeedbackItem = ({itemm}) => {

  const {deleteclick,editFeedback}=useContext(FeedbackContext)
  
// const handleClick=(id)=>{
//     console.log(id)
// }
 
  return (
    <Card reverse={false}>
      <div className="num-display">{itemm.rating}</div>
      <button onClick={()=>deleteclick(itemm.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <button onClick={()=>editFeedback(itemm)} className="edit">
        <FaEdit color="purple"/>
      </button>

      <div className="text-display">{itemm.text}</div>
      
    </Card>
  );
};



export default FeedbackItem;
