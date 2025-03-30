import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Login.css";

const Login = () => {
  return (
    <div>
      <Header />
      <main className="form-container">
        <h2>Login</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
