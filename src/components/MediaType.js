import React from "react";
import { Picture } from "react-responsive-picture";
import Container from "react-bootstrap/Container";
import YouTube from "react-youtube";

const MediaType = props => {
  if (props.mediaType === "image") {
    return (
      <Container
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          
        }}
      >
        <img
          src={props.url}
          fluid="true"
          className="image apod-photo"
          id="apod-image"
          alt="astronomy_picture_of_the_day"
          style={{
            width: "85%",
            margin: "0",
            borderRadius: "8px",
            boxShadow: "0 .1px .2px 0 #636363"
            
          }}
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
