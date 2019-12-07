import React from 'react';
import { cameraDropdownStyles } from '../styles.js'

const SpiritRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return (
    rover === "spirit" && (
      <div>
        <select
          required
          className="cameraDropdown"
          id="spiritCameras"
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
          <option value="NAVCAM">PANORAMIC CAMERA</option>
          <option value="PANCAM">NAVIGATION CAMERA</option>
          <option value="MINITES">MINI-TES</option>
        </select>
      </div>
    )
  );
}

export default SpiritRover;
