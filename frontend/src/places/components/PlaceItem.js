import React from "react";

import Card from "../../shared/components/UIElements/Card";

import classes from "./PlaceItem.module.scss";

const PlaceItem = (props) => {
  return (
    <li className={classes}>
      <Card className={classes}>
        <div className={classes}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={classes}>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};
export default PlaceItem;
