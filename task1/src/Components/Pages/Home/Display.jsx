import React, { Fragment } from "react";

const Display = (values) => {
  const tasks = [
    {
      date: new Date("09-12-2021"),
      task: "signup page",
      hours: "9",
    },
    {
      date: new Date("09-13-2021"),
      task: "login page",
      hours: "9",
    },
    {
      date: new Date("09-14-2021"),
      task: "home page",
      hours: "9",
    },
    {
      date: values.location.state.state.date,
      task: values.location.state.state.task,
      hours: values.location.state.state.hours,
    },
  ];

  return (
    <Fragment>
      {tasks.map((task, index) => (
        <div className="task" key={index}>
          <TaskDate date={task.date} />
          <div className="task__description">
            <h2>{task.title}</h2>
            <div className="task__hours">{task.hours} hrs</div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Display;

const TaskDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <div className="task-date">
        <div className="task-date__day">{day}</div>
        <div className="task-date__month">{month}</div>
        <div className="task-date__year">{year}</div>
      </div>
    </>
  );
};
