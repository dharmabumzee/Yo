import React from 'react';
import { cameraDropdownStyles } from '../styles.js';

const OpportunityRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return (
    rover === "opportunity" && (
      <div>
        <select
          className="cameraDropdown"
          id="opportunityCameras"
          value={camera}
          onChange={event => {
            event.preventDefault();
            setCamera(event.target.value);
            findMaxSol();
          }}
          style={cameraDropdownStyles}
        >
          <option>SELECT A CAMERA</option>
          <option value="FHAZ">
            FRONT HAZARD AVOIDANCE CAMERA
          </option>
          <option value="RHAZ">
            REAR HAZARD AVOIDANCE CAMERA
          </option>
          <option value="PANCAM">PANORAMIC CAMERA</option>
          <option value="NAVCAM">NAVIGATION CAMERA</option>
          <option value="MINITES">MINI-TES</option>
        </select>
      </div>
    )
  );
}

export default OpportunityRover;
