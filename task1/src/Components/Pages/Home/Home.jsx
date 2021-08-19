import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <h1 className="header">Welcome to timeSheet</h1>
      <button
        className="btn-button"
        color="primary"
        type="button"
        onClick={() => {
          history.push("/addtask");
        }}
      >
        AddTask
      </button>
    </div>
  );
};

export default Home;
