import React, { useState } from "react";
import axios from "axios";
import Rover from "./Rover";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import imageUrl from "../background.png";
import TinyButton from "./TinyButton";
import HeaderLogo from "./HeaderLogo";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./Menu";
import RoverDropdown from "./RoverDropdown";
import CuriosityRover from "./CuriosityRover";
import OpportunityRover from "./OpportunityRover";
import SpiritRover from "./SpiritRover";
import EnterSol from './EnterSol';
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
    <div className="App">
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
                    <RoverDropdown setRover={setRover} setMaxSol={setMaxSol} setCamera={setCamera} rover={rover} />
                    <CuriosityRover camera={camera} setCamera={setCamera} findMaxSol={findMaxSol} rover={rover}/>
                    <OpportunityRover camera={camera} setCamera={setCamera} findMaxSol={findMaxSol} rover={rover}/>
                    <SpiritRover camera={camera} setCamera={setCamera} findMaxSol={findMaxSol} rover={rover} />
                    <EnterSol maxSol={maxSol} rover={rover} placeholder={placeholder} setPlaceholder={setPlaceholder} setSol={setSol} />
                  </form>

                  {marsPhotos.length === 0 && marsError === true && (
                    <div className="noPhotos" style={noPhotoStyles}>
                      No data available for that sol date
                    </div>
                  )}
                  <br />
                  {loading === true}
                </div>

                {loading === false &&
                  marsPhotos.map((photo, index) => {
                    return (
                      <div
                        className="photo-scroll"
                        style={{ color: "#424242" }}
                        key={index}
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
