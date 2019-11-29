import React from "react";
import MediaType from "./MediaType";
import Spinner from "./Spinner";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Explanation from "./Explanation";
import TinyButton from "./TinyButton";

import "./../App.css";


const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

class APOD extends React.Component {
  constructor() {
    super();

    this.state = {
      date: undefined,
      explanation: undefined,
      mediaType: undefined,
      hdurl: undefined,
      image: undefined,
      title: undefined,
      url: undefined,
      copyright: undefined
    };
  }

  getApiNASA = async () => {
    const api_call = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );
    const data = await api_call.json();
   

    this.setState({
      date: data.date,
      explanation: data.explanation,
      hdurl: data.hdurl,
      mediaType: data.media_type,
      title: data.title,
      url: data.url,
      copyright: data.copyright
    });
  };

  componentDidMount() {
    this.getApiNASA();
  }

  render() {
    return (
      <Jumbotron className="apod">
        <Container
          className="apod-container"
          style={{
            display: "block",
            maxWidth: "100%",
            textAlign: "center"
          }}
        >
          <div className="date">{this.state.date}</div>

          <div id="desc" className="desc">
            {this.state.title} ➜ Copyright© {this.state.copyright}
          </div>

          {this.state.url ? (
            <MediaType mediaType={this.state.mediaType} url={this.state.url} />
          ) : (
            <Spinner />
          )}
          
          <Explanation />
          <TinyButton />
        </Container>
      </Jumbotron>
    );
  }
}

export default APOD;
