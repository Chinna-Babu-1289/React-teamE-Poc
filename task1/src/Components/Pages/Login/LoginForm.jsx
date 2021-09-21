import React, { useState } from "react";
import "../../../Styles/Form.css";
import Validate from "./Validate";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

const LoginForm = () => {
  const { logIn } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  let history = useHistory();
  console.log(logIn);

  let adminemail = "root@root.com";
  let adminpassword = "rootroot";

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const values = {
      email,
      password,
    };

    setErrors(Validate(values));
    console.log(values);

    if (adminemail === email && adminpassword === password) {
      logIn(values.email);
      history.push("/");
    } else {
      history.push("/login");
    }

    setEmail("");
    setPassword("");
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
              value={email}
              onChange={emailChangeHandler}
            />
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div className="name">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={passwordChangeHandler}
            />
            {errors.password && <div className="errors">{errors.password}</div>}
          </div>
          <div>
            <button className="submit" type="submit">
              Login
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
              history.push("/signup");
            }}
          >
            SignUP
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
