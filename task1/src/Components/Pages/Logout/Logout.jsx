import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  return (
    <div>
      <Button variant="contained">{history.push("/login")}</Button>
    </div>
  );
};

export default Logout;
