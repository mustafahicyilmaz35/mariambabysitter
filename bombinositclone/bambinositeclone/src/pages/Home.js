import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Trusted Babysitters Are Here!</h1>
              <p>Find the best sitter for your child. Sign up now!</p>
              <button>Sign Up</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-item">
              <img src="/images/baby-sitter.jpg" alt="Babysitting" />
              <h3>Baby Sitting</h3>
              <p>
                We offer experienced and reliable babysitters for your little
                ones.
              </p>
            </div>
            <div className="service-item">
              <img src="/images/baby-sitter1.jpg" alt="Senior Care" />
              <h3>Baby Activity</h3>
              <p>Professional caregivers to support your elderly loved ones.</p>
            </div>
            <div className="service-item">
              <img src="/images/baby-sitter2.jpg" alt="Pet Care" />
              <h3>Baby Game</h3>
              <p>Compassionate sitters for your furry friends.</p>
            </div>
          </div>
        </section>

        {/* Sign Up Cards Section */}
        <section className="signup-options">
          <h2>Join Our Community</h2>
          <div className="signup-cards">
            <div className="signup-card">
              <img
                src="/images/signup-babysitter.svg"
                alt="Babysitter Signup"
              />
              <h3>Become a Babysitter</h3>
              <p>Offer your services to families in need of trusted care.</p>
              <a href="/register-babysitter" className="signup-button">
                Sign Up as Sitter
              </a>
            </div>
            <div className="signup-card">
              <img src="/images/signup-parents.svg" alt="Parent Signup" />
              <h3>Find a Babysitter</h3>
              <p>Connect with experienced babysitters for your child.</p>
              <a href="/register-parent" className="signup-button">
                Sign Up as Parent
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <img src="/images/about-us.png" alt="About Us" />
            <div>
              <p>
                BambinoSit is a platform designed to connect parents with
                reliable and experienced babysitters. We prioritize safety,
                trust, and ease-of-use for families who want only the best for
                their children.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values">
          <h2>Our Values</h2>
          <div className="values-cards">
            <div className="value-card">
              <img src="/images/icon-safety.png" alt="Safety Icon" />
              <h3>Safety</h3>
              <p>
                We carefully screen and verify all babysitters to ensure a safe
                experience for your family.
              </p>
            </div>
            <div className="value-card">
              <img src="/images/icon-convenience.png" alt="Convenience Icon" />
              <h3>Convenience</h3>
              <p>
                Our platform is easy to use, allowing you to find babysitters
                quickly and efficiently.
              </p>
            </div>
            <div className="value-card">
              <img
                src="/images/icon-transparency.png"
                alt="Transparency Icon"
              />
              <h3>Transparency</h3>
              <p>
                See real reviews, ratings, and detailed sitter profiles before
                making your choice.
              </p>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What Parents Are Saying</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <img src="/images/user1.jpg" alt="User 1" />
              <h4>Emily R.</h4>
              <p className="stars">★★★★★</p>
              <p>
                “BambinoSit helped me find a caring and professional babysitter
                within hours. Highly recommended!”
              </p>
            </div>
            <div className="testimonial-card">
              <img src="/images/user2.jpg" alt="User 2" />
              <h4>James T.</h4>
              <p className="stars">★★★★★</p>
              <p>
                “My daughter absolutely loves her babysitter! The process was
                quick and stress-free.”
              </p>
            </div>
            <div className="testimonial-card">
              <img src="/images/user3.jpg" alt="User 3" />
              <h4>Sophia K.</h4>
              <p className="stars">★★★★☆</p>
              <p>
                “The platform is user-friendly and has a great selection of
                sitters. Will use again.”
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or need help, feel free to reach out.
              </p>
              <p>
                <strong>Email:</strong> support@bambinosit.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <img src="/images/contact-us.webp" alt="Contact" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
