import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import InputField from "../../../UI/InputField";

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
          <InputField
            for="date"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          >
            Date
          </InputField>
        </div>
        <div>
          <InputField
            for="task"
            type="text"
            value={enteredTask}
            onChange={taskChangeHandler}
          >
            Task
          </InputField>
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
        <Button className="btn" type="submit" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
