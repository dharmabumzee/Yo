import React, { useState } from "react";
import axios from "axios";
import Rover from "./Rover";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import imageUrl from "../background.png";
import TinyButton from "./TinyButton";
import { AiOutlineSearch } from "react-icons/ai";
import HeaderLogo from "./HeaderLogo";

import Menu from "./Menu";
import "../App.css";

require("typeface-space-mono");
require("lodash");

const MARS_ROVER = process.env.REACT_APP_NASA_API_KEY;

function MarsRoverPhotosExperimental() {
  // mars photos
  const [marsPhotos, setMarsPhotos] = useState([]);
  const [rover, setRover] = useState("");
  const [sol, setSol] = useState("");
  const [maxSol, setMaxSol] = useState("");
  const [camera, setCamera] = useState("");
  const [marsError, setMarsError] = useState(false);
  const [loading, setLoading] = useState(false);

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
            <Container
              className="apod-container"
              style={{
                display: "block",
                maxWidth: "100%",
                textAlign: "center",
                color: "#636363",
                fontFamily: "Space mono"
              }}
            >
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
                        }}
                        style={{
                          margin: "0 !important",
                          fontFamily: "Space mono",
                          fontSize: "16px",
                          color: "#636363"
                        }}
                      >
                        <option
                          hidden
                          style={{
                            margin: "auto",
                            textAlign: "justify",
                            textAlignLast: "center"
                          }}
                        >
                          CHOOSE A ROVER
                        </option>
                        <option
                          value="curiosity"
                          style={{
                            textAlign: "center !important",
                            textAlignLast: "center",
                            fontFamily: "Space mono"
                          }}
                        >
                          CURIOSITY - ACTIVE MISSION
                        </option>
                        <option value="opportunity">
                          OPPORTUNITY OPPY - RETIRED
                        </option>
                        <option
                          value="spirit"
                          style={{ textAlignLast: "center" }}
                        >
                          SPIRIT ROVER MER-2 - RETIRED
                        </option>
                      </select>
                    </div>

                    {rover === "curiosity" && (
                      <div
                        style={{
                          justifyContent: "items",
                          alignItems: "center",
                          fontFamily: "Space mono"
                        }}
                      >
                        <select
                          className="cameraDropdown"
                          id="curiosityCameras"
                          value={camera}
                          onChange={event => {
                            event.preventDefault();
                            setCamera(event.target.value);
                            findMaxSol();
                          }}
                          style={{
                            color: "#636363",
                            alignSelf: "center !important",
                            margin: "auto",
                            fontFamily: "Space mono",
                            fontSize: "1rem",
                            marginTop: "1em",
                            borderColor: "#111",
                            textAlign: "justify",
                            textAlignLast: "center"
                          }}
                        >
                          <option style={{ textAlign: "center" }}>
                            SELECT A CAMERA
                          </option>
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
                          style={{
                            alignSelf: "center",
                            fontFamily: "Space mono",
                            fontSize: "1em",
                            marginTop: "1em",
                            color: "#636363"
                          }}
                        >
                          <option>SELECT A CAMERA</option>
                          <option value="PANCAM">PANORAMIC CAMERA</option>
                          <option value="NAVCAM">NAVIGATION CAMERA</option>
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
                          style={{
                            color: "#636363",
                            alignSelf: "center",
                            fontFamily: "Space mono",
                            fontSize: "16px",
                            marginTop: "1em"
                          }}
                        >
                          <option>SELECT A CAMERA</option>
                          <option value="NAVCAM">PANORAMIC CAMERA</option>
                          <option value="PANCAM">NAVIGATION CAMERA</option>
                        </select>
                      </div>
                    )}

                    {maxSol !== "" && rover && (
                      <div
                        className="sol"
                        style={{
                          fontSize: "1rem",
                          color: "#636363",
                          fontFamily: "Space mono",
                          marginBottom: "2em"
                         
                        }}
                      >
                        Enter a number between 0 and {maxSol}:
                        <br />
                        <input
                          type="text"
                          className="sol-input"
                          id="sol-input"
                          onChange={event => {
                            event.preventDefault();
                            setSol(event.target.value);
                          }}
                          placeholder="Sol is a Mars-day"
                          style={{ fontSize: "14px", fontFamily: "Space mono",  outline: 'rgba(51, 181, 229, 0.4) !important'  }}
                        ></input>
                        <br />
                        <div style={{ marginTop: "2em", justifyContent: 'center', alignItems: 'center' }}>
                        <button style={{ justifyContent: 'center', alignItems: 'center', marginRight: '1em'}}>
                          
                            <AiOutlineSearch
                              className="search"
                              style={{ margin: "auto", alignSelf: 'left'}}
                          />
                         
                          </button>
                        </div>
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
                  <br />
                  {loading === true}
                </div>

                {loading === false &&
                  marsPhotos.map((photo, index) => {
                    return (
                      <div className="photo-scroll" style={{ color: '#424242'}}>
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

export default MarsRoverPhotosExperimental;
