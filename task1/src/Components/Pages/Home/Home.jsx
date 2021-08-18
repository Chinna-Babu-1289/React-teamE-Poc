import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../UI/Button";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <h1 className="header">Welcome to timeSheet</h1>
      <Button
        className="btn-button"
        color="primary"
        type="button"
        onClick={() => {
          history.push("/addtask");
        }}
      >
        AddTask
      </Button>
    </div>
  );
};

export default Home;
