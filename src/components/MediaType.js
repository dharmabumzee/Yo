import React from "react";
import { Picture } from "react-responsive-picture";
import Container from "react-bootstrap/Container";
import YouTube from "react-youtube";
import { mediaTypeContainerStyles, apodPhotoStyles } from "../styles.js";

const MediaType = ({ mediaType, url }) => {
  if (mediaType === "image") {
    return (
      <Container style={mediaTypeContainerStyles}>
        <Picture
          src={url}
          fluid="true"
          className="image apod-photo"
          id="apod-image"
          alt="astronomy_picture_of_the_day"
          style={apodPhotoStyles}
        />
      </Container>
    );
  } else if (mediaType === "video") {
    return <YouTube>{url}</YouTube>;
  } else {
    return (
      <div>
        <span>Unsupported media type</span>
      </div>
    );
  }
};

export default MediaType;
