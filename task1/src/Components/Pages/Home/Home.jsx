import React from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import "../../../Styles/Home.css";

const Home = () => {
  let history = useHistory();
  const { user } = useUserContext();
  console.log(user);

  return (
    <>
      <h1 className="header">Welcome to timeSheet {user.name}</h1>
      {user.isLoggedIn ? (
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
      ) : (
        <button
          className="btn-button"
          color="primary"
          type="button"
          onClick={() => {
            history.push("/login");
          }}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Home;
