import React from "react";
// import { useHistory } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
const Logout = () => {
  // let history = useHistory();
  const { user, logOut } = useUserContext();
  console.log(logOut);
  console.log(user);

  return <div>{!user.isLoggedIn && <button onClick={logOut}></button>}</div>;
};

export default Logout;
