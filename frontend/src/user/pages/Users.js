import React from "react";
import "./Users.module.scss";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Alex",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/5a/FF_XV_cover_art.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
