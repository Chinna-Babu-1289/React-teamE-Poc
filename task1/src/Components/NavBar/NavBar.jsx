import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const NavBar = () => {
  const [Clicked, setClicked] = useState(false);
  const menuList = NavMenu.map(({ url, title }, index) => {
    return (
      <li key={index} className="list-items">
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
      <ul className={Clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
      <div className="menu-icon" onClick={iconHandler}>
        {Clicked ? (
          <CloseIcon className="fas fa-bars" />
        ) : (
          <MenuIcon className="fas fa-times" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
