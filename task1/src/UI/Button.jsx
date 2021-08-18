import React from "react";
import { Button as Btn } from "@material-ui/core";

const Button = (props) => {
  return (
    <div>
      <Btn
        variant="contained"
        color={props.color}
        className={props.className}
        type={props.type || "button"}
        onClick={() => props.onClick()}
      >
        {props.children}
      </Btn>
    </div>
  );
};

export default Button;
