import React, { useState } from "react";
import {FaTimes} from 'react-icons/fa'

import Card from "./shared/Card";

const FeedbackItem = ({itemm,handleDelete}) => {
  
// const handleClick=(id)=>{
//     console.log(id)
// }
 
  return (
    <Card reverse={false}>
      <div className="num-display">{itemm.rating}</div>
      <button onClick={()=>handleDelete(itemm.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <div className="text-display">{itemm.text}</div>
      
    </Card>
  );
};



export default FeedbackItem;
