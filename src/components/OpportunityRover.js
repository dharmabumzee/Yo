import React from 'react';
import Select from "./Select";

const OpportunityRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return rover === "opportunity" && <Select />;
};

export default OpportunityRover;
