import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import LoginForm from "../Pages/Login/LoginForm";
import Logout from "../Pages/Logout/Logout";
import SignUpForm from "../Pages/Login/SignUpForm";
import AddTask from "../Pages/Home/AddTask";
import Display from "../Pages/Home/Display";
import NavBar from "./NavBar";
import NotFound from "../Pages/Home/NotFound";
import NavBar from "./NavBar";

const Routers = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/addtask" component={AddTask} />
          <Route path="/display" component={Display} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
