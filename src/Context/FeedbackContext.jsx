import { createContext, useState ,useEffect} from "react";


const FeedbackContext = createContext();
export default FeedbackContext;

export const FeedbackState = ({ children }) => {
  const [isloading,setIsLoading]=useState(true)
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add feedback
  const addFeedback = async(newFeedback) => {
    const response=await fetch('/api/feedback',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newFeedback)
    })
    const data=await response.json()
   
    setFeedback([data, ...feedback]);
  };

  // delete feedback
  const deleteclick =async (id) => {
    await fetch(`/api/feedback/${id}`,{
      method:'DELETE'

    })
    
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
  const updatefeedback = async(id, updatedItem) => {
    const response=await fetch(`/api/feedback/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body : JSON.stringify(updatedItem)
    })
    const data=await response.json()

    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };

useEffect(()=>{
  const fetchFeedback=async()=>{
    const res=await fetch(`/api/feedback`)
    const data=await res.json()
    setFeedback(data)  
    setIsLoading(false)  
  }
  fetchFeedback()
},[])
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isloading,
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
