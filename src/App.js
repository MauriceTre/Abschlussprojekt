import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Hinzufügen von Routes
import LandingPage from "./components/LandingPage";
import "./styles/App.css";
import DestinationPage from "./components/DestinationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {" "}
          {/* Ändern von Route zu Routes */}
          <Route path="/" exact element={<LandingPage />} />{" "}
          {/* Ändern von component zu element und Hinzufügen von {} */}
          <Route path="/destination" element={<DestinationPage />} />{" "}
          {/* Ändern von component zu element und Hinzufügen von {} */}
        </Routes>{" "}
        {/* Ändern von Route zu Routes */}
      </div>
    </Router>
  );
}

export default App;
