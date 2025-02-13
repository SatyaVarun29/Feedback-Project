import React from "react";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";

import FeedbackStats from "./components/FeedbackStats";
import Feedbackform from "./components/Feedbackform";
import { FeedbackState } from "./Context/FeedbackContext";

const App = () => {
  return (
    <FeedbackState>
      <div>
        <Header text={"Feedback UI"} />
        <div className="container">
          <Feedbackform />
          <FeedbackStats />
          <Feedbacklist />
        </div>
      </div>
    </FeedbackState>
  );
};

export default App;
