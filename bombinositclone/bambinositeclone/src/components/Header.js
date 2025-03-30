import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">BambinoSit Clone</div>
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
};

export default Header;
