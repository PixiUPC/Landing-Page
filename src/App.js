import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Benefits from "./components/pages/Benefit/Benefits";
import Home from "./components/pages/HomePage/Home";
import HowItWorks from "./components/pages/Work/HowItWorks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/benefits" element={<Benefits />} />
      </Routes>
    </Router>
  );
}

export default App;
