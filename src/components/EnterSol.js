import React from 'react';
import TextField from "@material-ui/core/TextField";
import { searchIconStyles, tryStyles } from '../styles.js'

const EnterSol = ({ setSol, maxSol, rover, placeholder, setPlaceholder }) => {
  return (
    maxSol !== "" && rover && (
      <div className="sol" style={{ marginBottom: "2em" }}>
        Enter a number between 0 and {maxSol}:
        <br />
        <div
          style={tryStyles}
        >
          Try 55. It returns results for almost all cameras.
        </div>
        <br />
        <div className="input-with-icon">
          <TextField
            type="text"
            required
            autoFocus
            className="sol-input classes.root"
            id="sol-input outlined-basic"
            variant="outlined"
            placeholder={placeholder}
            onFocus={event => {
              event.preventDefault();
              setPlaceholder("");
            }}
            onBlur={event => {
              event.preventDefault();
              setPlaceholder("Sol is a Mars-day");
            }}
            onChange={event => {
              event.preventDefault();
              setSol(event.target.value);
            }}
            inputProps={{
              style: {
                textAlign: "center",
                fontSize: "14px",
                fontFamily: "Space mono !important",
                margin: "auto"
              }
            }}
          />
          <svg
            className="searchIcon"
            style={searchIconStyles}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <br />
        </div>
      </div>
    )
  );
}

export default EnterSol;
