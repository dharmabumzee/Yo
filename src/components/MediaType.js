import React from "react";
import { Picture } from "react-responsive-picture";
import Container from "react-bootstrap/Container";
import YouTube from "react-youtube";
import { mediaTypeContainerStyles, apodPhotoStyles } from "../styles.js";

const MediaType = props => {
  if (props.mediaType === "image") {
    return (
      <Container style={mediaTypeContainerStyles}>
        <Picture
          src={props.url}
          fluid="true"
          className="image apod-photo"
          id="apod-image"
          alt="astronomy_picture_of_the_day"
          style={apodPhotoStyles}
        />
      </Container>
    );
  } else if (props.mediaType === "video") {
    return <YouTube>{props.url}</YouTube>;
  } else {
    return (
      <div>
        <span>Unsupported media type</span>
      </div>
    );
  }
};

export default MediaType;
