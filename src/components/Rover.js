import React from "react";
import { Picture } from "react-responsive-picture";

const Rover = ({ img, id, rover, date, sol, camera }) => {
  return (
    <figure className="marsInfo">
      <Picture
        className="marsPhoto"
        src={img}
        alt={id}
        fluid="true"
        style={{ marginBottom: "1em" }}
      />
      <br />
      Rover: {rover}
      <br />
      Taken: {date}
      <br />
      Sol: {sol}
      <br />
      {camera}
      <br />
      <br />
    </figure>
  );
};

export default Rover;
