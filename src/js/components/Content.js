import React from "react";

import Howto from "./Content/Howto";
import Users from "./Content/Users";

export default class Content extends React.Component {

  render() {
    return (
      <div>
        <Users />
        <Howto />
      </div>
    );
  }
}