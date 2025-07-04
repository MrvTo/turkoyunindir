import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OyunDetay from "./pages/OyunDetay";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oyun/:id" element={<OyunDetay />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
      </Routes>
    </Router>
  );
}

export default App;
