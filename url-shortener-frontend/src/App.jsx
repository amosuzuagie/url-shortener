import React from "react";
import "./App.css";
import { getApps } from "./utils/helper";
import { BrowserRouter } from "react-router-dom";

function App() {
  const CurrentApp = getApps();
  return (
    <BrowserRouter>
      <CurrentApp />
    </BrowserRouter>
  );
}

export default App;
