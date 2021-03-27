import React from "react";

import Input from "../../shared/components/FormElements/Input";

import classes from "./NewPlace.module.scss";

const NewPlace = () => {
  return (
    <form className={classes.placeForm}>
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewPlace;
