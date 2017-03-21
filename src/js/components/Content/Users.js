import React from "react";

import User from "./Users/User";
import UsersList from "./Users/UsersList";

export default class Users extends React.Component {

  render() {
    return (
      <div>
        <User />
        <UsersList />
      </div>
    );
  }
}