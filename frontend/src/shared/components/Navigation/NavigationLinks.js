import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthenticationContext } from "../../context/authentication-context";

import classes from "./NavigationLinks.module.scss";

const NavigationLinks = (props) => {
  const authentication = useContext(AuthenticationContext);
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {authentication.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {authentication.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACES</NavLink>
        </li>
      )}
      {!authentication.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {authentication.isLoggedIn && (
        <li onClick={authentication.logout}>
          <button>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavigationLinks;
