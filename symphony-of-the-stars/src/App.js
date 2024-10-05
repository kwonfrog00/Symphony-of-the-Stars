import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LaunchPage from "./pages/launch";
import MainPage from "./pages/main";
import { UserInteractionProvider } from "./UserInteractionContext";
import AtmospheresOfDistantWorldsPage from "./pages/discoveries/AtmospheresOfDistantWorlds";
import DeepestInfraredImagePage from "./pages/discoveries/DeepestInfraredImage"

function App() {
  return (
    <UserInteractionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route
            path="/atmospheres-of-distant-worlds"
            element={<AtmospheresOfDistantWorldsPage />}
          />
          <Route
            path="/deepest-infrared-image"
            element={<DeepestInfraredImagePage />}
          />
        </Routes>
      </Router>
    </UserInteractionProvider>
  );
}

export default App;
