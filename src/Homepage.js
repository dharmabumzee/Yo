import React from "react";
import Apod from "./components/Apod";
import imageUrl from "./background.png";
import HeaderLogo from "./components/HeaderLogo";
import Menu from "./components/Menu";
import Explanation from "./components/Explanation";
require("dotenv").config();

const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
class Homepage extends React.Component {
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
    const { date, title, copyright, url, mediaType, explanation } = this.state;
    return (
      <div
        className="App nasa-app auto-grid"
        id="AppID"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="app-anime" id="animate-area">
          <div className="App-content">
            <HeaderLogo />
            <Menu />
            <Apod
              date={date}
              title={title}
              copyright={copyright}
              url={url}
              mediaType={mediaType}
            />
            <Explanation explanation={explanation} />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
