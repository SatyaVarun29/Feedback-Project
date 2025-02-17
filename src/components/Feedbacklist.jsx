import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "./shared/spinner";

const Feedbacklist = () => {
  const { feedback, isloading } = useContext(FeedbackContext);

  if (!isloading && feedback.length === 0) {
    return <h2>no feedback yet</h2>;
  }

  return isloading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback &&
        feedback.map((item) => <FeedbackItem key={item.id} itemm={item} />)}
    </div>
  );
};

export default Feedbacklist;
