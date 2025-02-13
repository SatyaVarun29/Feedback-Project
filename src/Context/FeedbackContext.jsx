import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export default FeedbackContext;

export const FeedbackState = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a 1st item",
      rating: 10,
    },
    { id: 2, text: "This is a 2nd item", rating: 9 },
    { id: 3, text: "This is a 3rd item", rating: 8 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // delete feedback
  const deleteclick = (id) => {
    // console.log(id)
    if (window.confirm("are you sure want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // editfeedback

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // updatefeedback
  const updatefeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteclick,
        addFeedback,
        editFeedback,
        updatefeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
