import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import {
  explanationContainerStyles,
  apodTitleStyles,
  textExplanationStyles
} from "../styles.js";

const Explanation = ({ explanation }) => {
  return (
    <div className="App">
      <div className="app-anime" id="animate-area">
        <div className="App-content">
          <Jumbotron className="apod">
            <Container
              className="apod-container"
              style={explanationContainerStyles}
            >
              <h1
                className="title apod-explanation-title"
                style={apodTitleStyles}
                id="apod-explanation"
              >
                Astronomy Picture Of The Day
              </h1>
              <p
                className="text text-explanation"
                style={textExplanationStyles}
              >
                {explanation}
              </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
