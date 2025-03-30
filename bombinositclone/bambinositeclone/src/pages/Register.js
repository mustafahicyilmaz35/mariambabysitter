import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Register.css";

const Register = () => {
  return (
    <div>
      <Header />
      <main className="form-container">
        <h2>Register</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <label>Account Type</label>
          <select>
            <option value="parent">Parent</option>
            <option value="sitter">Sitter</option>
          </select>

          <button type="submit">Register</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
