import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/RegisterParent.css";

const RegisterParent = () => {
  return (
    <div>
      <Header />
      <main className="register-parent-container">
        <h2>Parent Registration Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="gender">I am:</label>
            <select id="gender" name="gender" required>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
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

          <button type="submit" className="submit-button">
            Subscribe
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterParent;
