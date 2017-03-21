import React from "react";

import Logo from "./Header/Logo";
import Registration from "./Header/Registration";

export default class Header extends React.Component {

  render() {
    return (
      <div>
        <Logo />
        <Registration />
      </div>
    );
  }
}