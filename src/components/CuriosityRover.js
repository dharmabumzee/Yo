import React from 'react';
import { cameraDropdownStyles } from '../styles.js'

const CuriosityRover = ({ camera, setCamera, findMaxSol, rover }) => {
  return (
    rover === "curiosity" && (
      <div>
        <select
          className="cameraDropdown"
          id="curiosityCameras"
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
          <option value="MAST">MAST CAMERA</option>
          <option value="CHEMCAM">
            CHEMISTRY AND CAMERA COMPLEX
          </option>
          <option value="NAVCAM">NAVIGATION CAMERA</option>
          <option value="MAHLI">MARS HAND LENS IMAGER</option>
          <option value="MARDI">MARS DESCENT IMAGER</option>
        </select>
      </div>
    )
  );
}

export default CuriosityRover;
