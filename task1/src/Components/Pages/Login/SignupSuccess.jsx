import React from "react";
import { useHistory } from "react-router-dom";

const SignupSuccess = () => {
  let history = useHistory();
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h1 className="form-success">Account Created Successfully!!!!</h1>
        </div>
        <div>
          <button
            className="submit"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              history.push("/login");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
