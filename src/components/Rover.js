import React from "react";
import { Picture } from "react-responsive-picture";

const Rover = props => {
  return (
    <figure className="marsInfo">
      <Picture
        className="marsPhoto"
        src={props.img}
        alt={props.id}
        sizes="(min-width: 36em) 33.3vw, 100vw"
        fluid="true"
        style={{ marginBottom: "1em" }}
      />
      <br />
      Rover: {props.rover}
      <br />
      Taken: {props.date}
      <br />
      Sol: {props.sol}
      <br />
      {props.camera}
      <br />
      <br />
    </figure>
  );
};

export default Rover;
