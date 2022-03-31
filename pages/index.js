import { useRef } from "react";
import axios from 'axios';

export default function Home() {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const submitter = e => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    const obj = {
      userdata: {
        email: enteredEmail,
        feedback: enteredFeedback
      }
    }

    axios.post('http://localhost:3000/api/feedback', obj)
    .then(res => console.log(res.data))
  }

  return (
    <div>
      <form onSubmit={submitter} >   
        <div>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInput} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea rows='5' id='feedback' ref={feedbackInput} ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  )
}
