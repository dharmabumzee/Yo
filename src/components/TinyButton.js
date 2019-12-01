import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { tinyButtonStyles } from "../styles.js";

class TinyButton extends React.Component {
  render() {
    return (
      <ScrollUpButton
        EasingType="easeInOutQuad"
        StopPosition={0}
        ShowAtPosition={550}
        AnimationDuration={1500}
        style={tinyButtonStyles}
        className="tinybutton"
      />
    );
  }
}

export default TinyButton;
