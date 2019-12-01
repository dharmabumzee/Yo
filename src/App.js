import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/mars-rover-photos" component={MarsRoverPhotos} />
    </Router>
  );
}

export default App;
