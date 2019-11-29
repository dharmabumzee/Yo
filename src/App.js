import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MarsRoverPhotosExperimental from "./components/MarsRoverPhotosExperimental";
import "./App.css";
require("typeface-space-mono");


function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route
        path="/mars-rover-photos"
        component={MarsRoverPhotosExperimental}
      />
    </Router>
  );
}

export default App;
