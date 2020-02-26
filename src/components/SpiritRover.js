import React from 'react';
import Select from "./Select";

const SpiritRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return rover === "spirit" && <Select />;
};

export default SpiritRover;
