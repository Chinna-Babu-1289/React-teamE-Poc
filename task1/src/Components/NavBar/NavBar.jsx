//react module imports
import React, { useState } from "react";

//react-roter-dom import
import { NavLink } from "react-router-dom";

//material-ui imports
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// local Componet and css imports
import NavBarMenu from "./NavBarMenu";
import "../../Styles/NavBar.css";

const NavBar = () => {
  const [Clicked, setClicked] = useState(false);
  const menuItems = NavBarMenu.map(({ url, title }, index) => {
    return (
      <li key={index} className="list-item">
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const iconHandler = () => {
    setClicked(!Clicked);
  };

  return (
    <nav>
      <ul className={Clicked ? "list-items" : "list-items close"}>
        {menuItems}
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
