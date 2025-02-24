import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerSecondLayerConteiner">
        <div className="footerMenu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footerContact">
          <ul>
            <li>Adress</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footerSocial">
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerCopyright">
        <p>©Mariem Guesmi 2025</p>
      </div>
    </footer>
  );
}

export default Footer;
