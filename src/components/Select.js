import React from "react";
import { cameraDropdownStyles } from "../styles.js";

const Select = ({ camera, setCamera, findMaxSol }) => {
  return (
    <div>
      <select
        className="cameraDropdown"
        id="opportunityAndSpiritCameras"
        value={camera}
        onChange={event => {
          event.preventDefault();
          setCamera(event.target.value);
          findMaxSol();
        }}
        style={cameraDropdownStyles}
      >
        <option>SELECT A CAMERA</option>
        <option value="FHAZ">FRONT HAZARD AVOIDANCE</option>
        <option value="RHAZ">REAR HAZARD AVOIDANCE</option>
        <option value="PANCAM">PANORAMIC</option>
        <option value="NAVCAM">NAVIGATION</option>
        <option value="MINITES">MINI-TES</option>
      </select>
    </div>
  );
};

export default Select;
