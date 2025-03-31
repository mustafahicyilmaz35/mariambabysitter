import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About BambinoSit</h4>
          <p>
            Connecting families with trusted babysitters. We prioritize safety,
            trust, and convenience.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/register-parent">Parent Signup</a>
            </li>
            <li>
              <a href="/register-babysitter">Sitter Signup</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <img src="/images/icon-fb.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/images/icon-ig.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/icon-x.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BambinoSit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
