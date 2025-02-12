import React, { useState } from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./Data/Feedbackdata";
import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [Feedbackdata, setFeedbackData] = useState(FeedbackData);

  const deleteclick = (id) => {
    // console.log(id)
    if(window.confirm("are you sure want to delete")){

      setFeedbackData(Feedbackdata.filter((item) => (item.id!==id)));
    }

    
  }
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedbackData([newFeedback,...FeedbackData])
  }
  return (
    <>
      <div>
        <Header text={"Feedback UI"} />
        <div className="container">
          <Feedbackform handleAdd={addFeedback}/>
         <FeedbackStats feedback={Feedbackdata}/>
        <Feedbacklist handledeletion={deleteclick} data={Feedbackdata} />
        </div>
      </div>
    </>
  );
};

export default App;
