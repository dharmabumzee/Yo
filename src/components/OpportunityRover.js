import React from 'react';
import Select from "./Select";

const OpportunityRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return rover === "opportunity" && <Select camera={camera} setCamera={setCamera} findMaxSol={findMaxSol}/>;
};

export default OpportunityRover;
