import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import "../../../Styles/Form.css";
import Validate from "./Validate";

const SignUpForm = (submitForm) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  // let history = useHistory();
  const [dataIsValid, setDataIsValid] = useState(false);

  const ChangeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsValid) {
      submitForm(true);
    }
  }, [dataIsValid, errors, submitForm]);

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    setDataIsValid(true);
    console.log(values);
    setValues({
      fullname: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Sign Up</h2>
        </div>
        <form className="form-wrapper" onSubmit={submitHandler}>
          <div className="name">
            <label className="label">Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={ChangeHandler}
            />
            {errors.fullname && <div className="errors">{errors.fullname}</div>}
          </div>
          <div className="name">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={ChangeHandler}
            />
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div className="name">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={ChangeHandler}
            />
            {errors.password && <div className="errors">{errors.password}</div>}
          </div>
          <div>
            <button className="submit" type="submit">
              SignUp
            </button>
          </div>
        </form>
        {/* <p>OR</p>
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
         </div> */}
      </div>
    </div>
  );
};

export default SignUpForm;
