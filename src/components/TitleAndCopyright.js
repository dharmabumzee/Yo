import React from "react";

const TitleAndCopyright = ({ title, copyright }) => {
  return copyright ? (
    <div id="desc" className="desc">
      {title} ➜ Copyright© {copyright}
    </div>
  ) : (
    <div id="desc" className="desc">
      {title} ➜ Copyright© "NASA"
    </div>
  );
};

export default TitleAndCopyright;
