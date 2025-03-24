// SignUp.js
import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import BabySitterSignupCard from "./BabysitterSignupCard";
import ParentSignupCard from "./ParentSignupCard";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz, örneğin API çağrısı yapabilirsiniz
    console.log(formData);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <BabySitterSignupCard />
      <ParentSignupCard />
    </div>
  );
}

export default SignUp;
