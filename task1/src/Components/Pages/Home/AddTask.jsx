import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AddTask = () => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredHours, setEnteredHours] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const hoursChangeHandler = (event) => {
    setEnteredHours(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const TaskData = {
      date: enteredDate,
      task: enteredTask,
      hours: enteredHours,
    };
    console.log(TaskData);
    setEnteredDate("");
    setEnteredTask("");
    setEnteredHours("");
  };

  let history = useHistory();

  return (
    <div className="addtask">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            id="task"
            value={enteredTask}
            onChange={taskChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="hours">Hours</label>
          <input
            type="number"
            id="hours"
            value={enteredHours}
            onChange={hoursChangeHandler}
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;
