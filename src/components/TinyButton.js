import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

export default class TinyButton extends React.Component {
  render() {
    return (
      <div className="tinybutton">
        <ScrollUpButton
          EasingType="easeInOutQuad"
          StopPosition={0}
          ShowAtPosition={550}
          AnimationDuration={1500}
          style={{
            backgroundColor: "#111 !important",
            color: "#636363 !important"
           
          }}
          ToggledStyle={{ border: "none !important", outline: 'none !important' }}
          className="tinybutton"
        />
      </div>
    );
  }
}
