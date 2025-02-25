import './Header.css';
function Header() {
  return (
    <header>
      <div id="header-main-container" class="header-main-container">
        <div id="header-logo">
          <img src="/logo.jpg" alt="babysitter" class="header-logo" />
        </div>
        <div id="header-nav">
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            {/* <li>
              <a href="#services">Services</a>
            </li> */}
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
      </div>
    </header>
  );
}

export default Header;