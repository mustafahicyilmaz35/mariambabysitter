import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="better-header">
      <div className="better-header-container">
        <div className="header-logo">
          Bambino<span>Sit</span>
        </div>
        <nav className="header-nav">
          <a href="/">Home</a>
          <a href="/register-parent">Parents</a>
          <a href="/register-babysitter">Sitters</a>
          <a href="/login">Login</a>
          <a href="/register-parent" className="btn parent-btn">
            Join as Parent
          </a>
          <a href="/register-babysitter" className="btn sitter-btn">
            Join as Sitter
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
