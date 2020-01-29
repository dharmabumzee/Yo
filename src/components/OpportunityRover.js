import React from 'react';
import Select from "./components/Select";

const OpportunityRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return rover === "opportunity" && <Select />;
};

export default OpportunityRover;
