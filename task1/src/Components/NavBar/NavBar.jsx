//react module imports
import React, { useState } from "react";

//react-roter-dom import
import { NavLink } from "react-router-dom";

//material-ui imports
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// local Componet and css imports
import { LoggedInNavBarMenu, LoggedoutNavBarMenu } from "./NavBarMenu";
import "../../Styles/NavBar.css";
import { useUserContext } from "../Context/UserContext";

const NavBar = () => {
  const { user } = useUserContext();
  const [Clicked, setClicked] = useState(false);
  const loggedInmenuItems = LoggedInNavBarMenu.map(({ url, title }, index) => {
    return (
      <li key={index} className="list-item">
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  const loggedoutmenuItems = LoggedoutNavBarMenu.map(
    ({ url, title }, index) => {
      return (
        <li key={index} className="list-item">
          <NavLink exact to={url} activeClassName="active">
            {title}
          </NavLink>
        </li>
      );
    }
  );

  const iconHandler = () => {
    setClicked(!Clicked);
  };

  return (
    <nav>
      <ul className={Clicked ? "list-items" : "list-items close"}>
        {user.isLoggedIn ? loggedInmenuItems : loggedoutmenuItems}
      </ul>
      <div className="icons" onClick={iconHandler}>
        {Clicked ? (
          <CloseIcon className="fas cross-menu" />
        ) : (
          <MenuIcon className="fas hamburger-menu" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
