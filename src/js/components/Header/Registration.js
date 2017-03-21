import React from "react";

import Form from "./Registration/Form";
import Slider from "./Registration/Slider";

export default class Registration extends React.Component {

  render() {
    return (
      <div>
        <Slider />
        <Form />
      </div>
    );
  }
}