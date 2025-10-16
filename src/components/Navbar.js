import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
         <img src={logo} alt="logo" style={{ height: "40px" }} /> Türktorrentindir
        </Link>
        <div className="menu">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/hakkimizda">Hakkımızda</Link>
          <Link to="/iletisim">Easter Egg</Link>
        </div>
      </div>
    </nav>
  );
}
