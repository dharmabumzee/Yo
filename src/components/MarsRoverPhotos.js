import React, { useState } from "react";
import axios from "axios";
import Rover from "./Rover";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import imageUrl from "../background.png";
import TinyButton from "./TinyButton";
import HeaderLogo from "./HeaderLogo";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Menu from "./Menu";
import {
  marsRoverStyles,
  roverDropdownStyles,
  cameraDropdownStyles,
  noPhotoStyles,
  searchIconStyles
} from "../styles.js";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const MARS_ROVER = process.env.REACT_APP_NASA_API_KEY;

function MarsRoverPhotos() {
  // mars photos
  const [marsPhotos, setMarsPhotos] = useState([]);
  const [rover, setRover] = useState("");
  const [sol, setSol] = useState("");
  const [maxSol, setMaxSol] = useState("");
  const [camera, setCamera] = useState("");
  const [marsError, setMarsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("Sol is a Mars-day");
  
  const classes = useStyles();

  // mars photos
  const marsSearch = () => {
    setLoading(true);
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${MARS_ROVER}`
      )
      .then(res => {
        setMarsPhotos(res.data.photos.slice(0, 24));
        if (!marsPhotos.length > 0) {
          setMarsError(true);
        }
      })
      .then(() => {
        setLoading(false);
      });
  };

  function findMaxSol() {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?&api_key=${MARS_ROVER}`
      )
      .then(res => {
        setMaxSol(res.data.photo_manifest.max_sol);
      });
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="app-anime" id="animate-area">
        <div className="App-content">
          <HeaderLogo />
          <Menu />
          <Jumbotron className="apod">
            <Container className="apod-container" style={marsRoverStyles}>
              {/* mars search */}
              <section className="marsDiv" id="marsDiv">
                <h1 className="marsTitle">
                  NASA's Mars Exploration Raw Images
                </h1>

                <div className="marsForm">
                  <form
                    className="selectMarsPhotos"
                    onSubmit={event => {
                      event.preventDefault();
                      marsSearch();
                    }}
                  >
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

                    {rover === "curiosity" && (
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
                    )}

                    {rover === "opportunity" && (
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
                    )}

                    {rover === "spirit" && (
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
                          <option value="FHAZ">
                            REAR HAZARD AVOIDANCE CAMERA
                          </option>
                          <option value="NAVCAM">PANORAMIC CAMERA</option>
                          <option value="PANCAM">NAVIGATION CAMERA</option>
                          <option value="MINITES">MINI-TES</option>
                        </select>
                      </div>
                    )}

                    {maxSol !== "" && rover && (
                      <div className="sol" style={{ marginBottom: "2em" }}>
                        Enter a number between 0 and {maxSol}:
                        <br />
                        <div style={{ fontSize: ".7rem", margin: "1em 0" }}>
                           Try 55. It returns results for almost all cameras
                         </div>
                        <br />
                        <TextField
                          type="text"
                          className="sol-input"
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
                            style: { textAlign: "center", fontSize: "14px" }
                          }}
                        />
                        <br />
                      </div>
                    )}
                  </form>

                  {marsPhotos.length === 0 && marsError === true && (
                    <div
                      className="noPhotos"
                      style={{
                        color: "#636363",
                        fontSize: "14px",
                        fontFamily: "Space mono"
                      }}
                    >
                      No data available for that sol date
                    </div>
                  )}
                  <svg className="searchIcon" style={searchIconStyles} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                  <br />
                  {loading === true}
                </div>

                {loading === false &&
                  marsPhotos.map((photo, index) => {
                    return (
                      <div
                        className="photo-scroll"
                        style={{ color: "#424242" }}
                      >
                        <Rover
                          className={`mars${index}`}
                          img={photo.img_src}
                          rover={photo.rover.name}
                          key={photo.id}
                          date={photo.earth_date}
                          sol={photo.sol}
                          camera={photo.camera.full_name}
                        />
                      </div>
                    );
                  })}
                <TinyButton />
              </section>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
}

export default MarsRoverPhotos;
