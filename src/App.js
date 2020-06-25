import React from "react";
import Navbar from "./components/navBar";
import "./App.css";
import CoverContainer from "./components/covContainer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CoverContainer />
    </React.Fragment>
  );
}

export default App;
