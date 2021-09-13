import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../Styles/Form.css";

const AddTask = () => {
  let history = useHistory();

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const hoursChangeHandler = (event) => {
    setHours(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const values = {
      task: task,
      date: new Date(date),
      hours: +hours,
    };
    history.push("/display", { state: values });
    // console.log(values);

    setTask("");
    setDate(new Date(""));
    setHours("");
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
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="name">
            <label className="label">Task</label>
            <input
              className="input"
              type="text"
              name="task"
              value={task}
              onChange={taskChangeHandler}
            />
          </div>
          <div className="name">
            <label className="label">Hours</label>
            <input
              className="input"
              type="number"
              name="hours"
              value={hours}
              onChange={hoursChangeHandler}
            />
          </div>
          <div>
            <button className="submit">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
