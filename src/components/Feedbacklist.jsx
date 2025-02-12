import React from "react";
import FeedbackItem from "./FeedbackItem";

const Feedbacklist = ({ data,handledeletion }) => {
  return (
    <div className="feedback-list">

  {data && data.map((item) => <FeedbackItem handleDelete={handledeletion} key={item.id} itemm={item}/>)}
    </div>
)};

export default Feedbacklist
