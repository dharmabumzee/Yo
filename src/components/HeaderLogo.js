import React from "react";
import logo from "../logo_transparent.png";

const HeaderLogo = () => {
  return (
    <div id="logo">
      <a href="/">
        <img id="icon" src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default HeaderLogo;
