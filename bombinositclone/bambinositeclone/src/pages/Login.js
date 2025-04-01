import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Login.css";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="login-container">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>
        <form>
          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <button type="submit">Log In</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/register-parent">Sign Up</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
