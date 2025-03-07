import React from "react";
import CardList from "./CardList";
import "./Home.css";

const cities = [
  { name: "Tunis", img: "/tunis.jpg" },
  { name: "Sfax", img: "/sfax.jpeg" },
  { name: "Sousse", img: "/sousse.jpg" },
  { name: "Bizerte", img: "/bizerte.jpg" },
  { name: "Gabes", img: "/gabes.jpg" },
];

function Home() {
  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero-section">
        <h1>Find Trusted Babysitters Near You</h1>
        <p>Safe, reliable, and experienced babysitters just a click away!</p>
        <div className="search-bar">
          <input type="text" placeholder="City or neighborhood" />
          <button>Search</button>
        </div>
      </section>

      {/* POPÜLER ŞEHİRLER */}
      {/* <section className="popular-cities">
        <h2>Popular Cities</h2>
        <div className="city-grid">
          {["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes"].map(
            (city, index) => (
              <div key={index} className="city-card">
                <img
                  src={`https://source.unsplash.com/200x200/?${city}`}
                  alt={city}
                />
                <p>{city}</p>
              </div>
            )
          )}
        </div>
      </section> */}

      <section className="popular-cities">
        <h2>Popular Cities in Tunisia</h2>
        <div className="city-grid">
          {cities.map((city, index) => (
            <div key={index} className="city-card">
              <img src={city.img} alt={city.name} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="why-choose-us">
        <h2>Why Choose BabysitterPro?</h2>
        <div className="features">
          <div className="feature-card">✅ Verified Babysitters</div>
          <div className="feature-card">✅ Trusted by Thousands</div>
          <div className="feature-card">✅ Easy Booking System</div>
        </div>
      </section>

      {/* USER TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Parents Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>
              "This service saved my life! Found an amazing babysitter in no
              time."
            </p>
            <strong>- Sarah, Paris</strong>
          </div>
          <div className="testimonial-card">
            <p>"The reviews and background checks gave me peace of mind."</p>
            <strong>- John, Lyon</strong>
          </div>
        </div>
      </section>

      {/* MEVCUT BAKICILAR */}
      <section className="babysitter-list-section">
        <h2>Available Babysitters</h2>
        <CardList />
      </section>
    </div>
  );
}

export default Home;
