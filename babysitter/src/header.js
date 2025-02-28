import "./Header.css";
import { Link } from "react-router-dom"; // React Router ile sayfalar arası geçiş yapabilmek için

function Header() {
  return (
    <header>
      <div id="header-main-container" className="header-main-container">
        <div id="header-logo">
          <img src="/logo.jpg" alt="babysitter" className="header-logo" />
        </div>
        <div id="header-nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div id="header-social-media">
          <ul className="social-media-icons">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div id="header-auth-buttons">
          <ul className="auth-buttons">
            <li>
              <Link to="/signin">
                <button className="signin-btn">Sign In</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="signup-btn">Sign Up</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
