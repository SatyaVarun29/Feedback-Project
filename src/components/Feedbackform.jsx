import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const Feedbackform = () => {
  const { addFeedback, feedbackEdit, updatefeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btndisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text == "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must contain atleast 10 characters");
      setbtnDisabled(true);
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit == true) {
        updatefeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }
    setText("");
  };

  useEffect(() => {
    if (feedbackEdit.edit == true) {
      setbtnDisabled(false);
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button isdisabled={btndisabled} version={"primary"} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
