import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../Styles/Form.css";

const AddTask = () => {
  let history = useHistory();
  const [values, setValues] = useState({
    date: "",
    task: "",
    hours: "",
  });

  const ChangeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    history.push("/display", { values });
    console.log(values);
    setValues({
      date: "",
      task: "",
      hours: "",
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Add Task</h2>
        </div>
        <form className="form-wrapper" onSubmit={submitHandler}>
          <div className="name">
            <label className="label">Date</label>
            <input
              className="input"
              type="date"
              name="date"
              value={values.date}
              onChange={ChangeHandler}
            />
          </div>
          <div className="name">
            <label className="label">Task</label>
            <input
              className="input"
              type="text"
              name="task"
              value={values.task}
              onChange={ChangeHandler}
            />
          </div>
          <div className="name">
            <label className="label">Hours</label>
            <input
              className="input"
              type="number"
              name="hours"
              value={values.hours}
              onChange={ChangeHandler}
            />
          </div>
          <div>
            <button className="submit" type="submit">
              Add Task
            </button>
          </div>
        </form>
        <p></p>
        <div>
          <button className="submit" type="button">
            List View
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
