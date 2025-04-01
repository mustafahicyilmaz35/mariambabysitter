import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/RegisterBabysitter.css";

const RegisterBabysitter = () => {
  return (
    <div>
      <Header />
      <main className="register-babysitter-container">
        <h2 style={{ color: "#cc00cc" }}>Babysitter Registration Form</h2>
        <form>
          {/* Step 1 */}
          <fieldset>
            {/* <legend>Step 1 of 6</legend> */}

            <div className="form-group">
              <label htmlFor="gender">I am:</label>
              <select id="gender" name="gender" required>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate">Date of Birth:</label>
              <input type="date" id="birthDate" name="birthDate" required />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>
          </fieldset>

          {/* Steps 2 to 6 would follow a similar structure */}

          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterBabysitter;
