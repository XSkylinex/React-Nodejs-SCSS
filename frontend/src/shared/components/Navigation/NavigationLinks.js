import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLinks.module.scss";

const NavigationLinks = (props) => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">ADD PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavigationLinks;
