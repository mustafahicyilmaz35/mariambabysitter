// Contact.js
import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-info">
        📍 Address: 123 Babysitter St, City, Country
      </p>
      <p className="contact-info">
        📞 Phone: <a href="tel:+1234567890">+216 26 567-890</a>
      </p>
      <p className="contact-info">
        ✉️ Email: <a href="mailto:info@babysitter.com">info@babysitter.com</a>
      </p>
    </div>
  );
}

export default Contact;



