import React from "react";

const InputField = (props) => {
  return (
    <div>
      <label htmlFor={props.for}>{props.children}</label>
      <input
        type={props.type || "text"}
        className={props.className}
        id={props.for}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputField;
