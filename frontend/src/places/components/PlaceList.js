import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import classes from "./PlaceList.module.scss";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={classes}>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className={classes}>
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.Location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;