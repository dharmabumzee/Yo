import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import imageUrl from "../background.png";

import axios from "axios";
import "./../App.css";


const EXPLANATION = process.env.REACT_APP_NASA_API_KEY;

const Explanation = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${EXPLANATION}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="app-anime" id="animate-area">
        <div className="App-content">
          <Jumbotron className="apod">
            <Container
              className="apod-container"
              style={{
                display: "block",
                maxWidth: "75%",
                textAlign: "center",
                margin: "auto",
                color: "#636363"
              }}
            >
              <h1
                className="title apod-explanation-title"
                style={{
                  color: "#636363 !important",
                  fontSize: "1.7rem",
                  marginTop: "1.5em"
                }}
                id="apod-explanation"
              >
                Astronomy Picture Of The Day
              </h1>
              <p
                className="text text-explanation"
                style={{
                  textAlign: "justify",
                  textJustify: "inter-character",
                  textIndent: "1em"
                }}
              >
                {data.explanation}
              </p>
            </Container>
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
