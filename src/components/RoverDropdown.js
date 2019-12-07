import React from 'react';
import { roverDropdownStyles } from '../styles.js'

const RoverDropdown = ({ setCamera, setRover, setMaxSol, rover }) => {
  return (
    <div>
      <select
        className="roverDropdown"
        value={rover}
        onChange={event => {
          event.preventDefault();
          setRover(event.target.value);
          setMaxSol("");
          setCamera("");
        }}
        style={roverDropdownStyles}
      >
        <option hidden>CHOOSE A ROVER</option>
        <option value="curiosity">
          CURIOSITY - ACTIVE MISSION
        </option>
        <option value="opportunity">
          OPPORTUNITY OPPY - RETIRED
        </option>
        <option value="spirit">
          SPIRIT ROVER MER-2 - RETIRED
        </option>
      </select>
    </div>
  );
}

export default RoverDropdown;
