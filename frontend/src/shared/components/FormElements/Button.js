import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.scss";

const Button = (props) => {
  if (props.href) {
    return (
      <a
        className={`${classes.button} ${classes.button}--${
          props.size || "default"
        } ${props.inverse && `${classes.buttonInverse}`} ${
          props.danger && `${classes.buttonDanger}`
        }`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${classes.button} ${classes.button}--${props.size || "default"} ${
          props.inverse && `${classes.buttonInverse}`
        } ${props.danger && `${classes.buttonDanger}`}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${classes.button} ${classes.button}--${
        props.size || "default"
      } ${props.inverse && `${classes.buttonInverse}`} ${
        props.danger && `${classes.buttonDanger}`
      }`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
