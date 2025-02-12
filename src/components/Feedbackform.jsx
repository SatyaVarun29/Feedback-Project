import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";


const Feedbackform = ({handleAdd}) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btndisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
   if(text==''){
    setbtnDisabled(true)
    setMessage(null)
   }
   else if(text !=='' && text.trim().length<=10){
    setMessage("Text must contain atleast 10 characters")
    setbtnDisabled(true)
   }
   else{
    setMessage(null)
    setbtnDisabled(false)
   }

    setText(e.target.value);
  };

  const handleSubmit=(e)=>{
     e.preventDefault()
     if(text.trim().length>10){
      const newFeedback={
        text,
        rating
      }
      handleAdd(newFeedback)

     }
     setText('')
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(e)=>setRating(e)}/>
        <div className="input-group">
          <input
            type="text"
            placeholder="write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button isdisabled={btndisabled} version={'primary'} type="submit" >Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default Feedbackform;
