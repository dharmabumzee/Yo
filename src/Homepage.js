import React, { useState, useEffect } from "react";
import APOD from "./components/APOD";
import verticalImage from "./background.png";
import horizontalImage from "./background.png";
import HeaderLogo from "./components/HeaderLogo";
import Menu from "./components/Menu";
import "./App.css";


const Homepage = () => {
  const imageUrl = window.innerWidth >= 768 ? verticalImage : horizontalImage;

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
          <APOD />
        </div>
      </div>
    </div>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
};

export default Homepage;
