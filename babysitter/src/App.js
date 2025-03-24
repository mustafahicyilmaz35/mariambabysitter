import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import BabysitterDetail from "./BabysitterDetail";
import SignUp from "./Signup";
import SignIn from "./SignIn";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Signupbabysitter from "./Signupbabysitter";
import Signupparent from "./Signupparrent";

function App() {
  return (
    <Router>
      <div id="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/babysitter/:name" element={<BabysitterDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signupbabysitter" element={<Signupbabysitter />} />
          <Route path="/signupparent" element={<Signupparent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
