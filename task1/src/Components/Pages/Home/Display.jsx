import React from "react";

const Display = (values) => {
  // console.log(values);
  const date = values.location.state.values.date;
  const title = values.location.state.values.task;
  const hours = values.location.state.values.hours;
  return (
    <div>
      <div>{date}</div>
      <div>{title}</div>
      <div>{hours}</div>
    </div>
  );
};
export default Display;
