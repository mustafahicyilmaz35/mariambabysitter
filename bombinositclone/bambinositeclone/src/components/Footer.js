import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>
        © {new Date().getFullYear()} BambinoSit Clone. Tüm hakları saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
