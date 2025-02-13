import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";


const Feedbacklist = () => {

  const {feedback}=useContext(FeedbackContext)
  return (
    <div className="feedback-list">

  {feedback && feedback.map((item) => <FeedbackItem  key={item.id} itemm={item}/>)}
    </div>
)};

export default Feedbacklist
