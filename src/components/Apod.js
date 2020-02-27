import React from "react";
import MediaType from "./MediaType";
import Spinner from "./Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import TinyButton from "./TinyButton";
import { containerStyles } from "../styles.js";

const Apod = ({ date, title, copyright = "NASA", url, mediaType }) => {
  return (
    <Jumbotron className="apod">
      <Container className="apod-container" style={containerStyles}>
        <div className="date">{date}</div>
          <div id="desc" className="desc">
            {title} ➜ Copyright© {copyright}
          </div>
        {url ? <MediaType mediaType={mediaType} url={url} /> : <Spinner />}
        <TinyButton />
      </Container>
    </Jumbotron>
  );
};

export default Apod;
