import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import imageUrl from "../background.png";
import { explanationContainerStyles, apodTitleStyles, textExplanationStyles } from '../styles.js';
import "./../App.css";

const Explanation = props => {
  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="app-anime" id="animate-area">
        <div className="App-content">
          <Jumbotron className="apod">
            <Container className="apod-container" style={explanationContainerStyles}>
              <h1
                className="title apod-explanation-title"
                style={apodTitleStyles}
                id="apod-explanation"
              >
                Astronomy Picture Of The Day
              </h1>
              <p className="text text-explanation" style={textExplanationStyles}>
                {props.explanation}
              </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Explanation;