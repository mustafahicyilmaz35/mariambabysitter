import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterParent from "./pages/RegisterParent";
import RegisterBabysitter from "./pages/RegisterBabysitter";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-parent" element={<RegisterParent />} />
        <Route path="/register-babysitter" element={<RegisterBabysitter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
