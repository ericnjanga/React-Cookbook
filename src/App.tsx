import { BrowserRouter as Router } from "react-router-dom";
import "./styles/_App.scss";
import AppRoutes from "./AppRoutes";
import React from "react";

import "react-accessible-accordion/dist/fancy-example.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
