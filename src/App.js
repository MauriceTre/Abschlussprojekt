import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./styles/App.css";
import DestinationPage from "./components/DestinationPage";
import RegisterPage from "./components/auth/Register";
import SignInPage from "./components/auth/SignIn";
import PlaneGame from "./components/Minigame";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/game" element={<PlaneGame />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

