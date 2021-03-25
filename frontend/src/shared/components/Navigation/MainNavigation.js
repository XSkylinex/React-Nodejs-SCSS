import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavigationLinks from "./NavigationLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../../shared/components/UIElements/Backdrop";

import classes from "./MainNavigation.module.scss";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={classes.drawerNav}>
          <NavigationLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button className={classes.menuBtn} onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className={classes.title}>
          <Link to="/">Your Places</Link>
        </h1>
        <nav className={classes.headerNav}>
          <NavigationLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};
export default MainNavigation;
