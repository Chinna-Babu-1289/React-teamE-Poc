import React from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import SignupSuccess from "./SignupSuccess";

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <SignUpForm submitForm={submitForm} />
      ) : (
        <SignupSuccess />
      )}
    </div>
  );
};

export default Form;
