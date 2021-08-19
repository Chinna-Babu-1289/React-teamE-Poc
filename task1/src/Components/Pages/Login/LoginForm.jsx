import React, { useState } from "react";
import "../../../Styles/Form.css";
import Validate from "./Validate";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  let history = useHistory();

  const ChangeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setErrors(Validate(values));
    console.log(values);
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login</h2>
        </div>
        <form className="form-wrapper" onSubmit={submitHandler}>
          <div className="name">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={values.email}
              onChange={ChangeHandler}
            />
            {errors.email && <p className="errors">{errors.email}</p>}
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
            {errors.password && <p className="errors">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" type="submit">
              Login
            </button>
          </div>
        </form>
        <p>OR</p>
        <div>
          <button
            className="submit"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              history.push("/signup");
            }}
          >
            SignUP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
