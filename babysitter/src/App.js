import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mariam from './mariam';
import Name from './name';
import Dinamik from './dinamik';
import Header from './header';
import Footer from './Footer';
import CardList from './CardList';
import BabysitterDetail from './BabysitterDetail';
import SignUp from './Signup';
import SignIn from './SignIn';

function App() {
 return (
   <Router>
     <div id="App">
       <Header />
       <Routes>
         {/* Anasayfa: Bebek bakıcısı kartlarını gösteriyoruz */}
         <Route path="/" element={<CardList />} />

         {/* Detay sayfası: Kart tıklanınca açılacak */}
         <Route path="/babysitter/:name" element={<BabysitterDetail />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
       </Routes>
       {/* <CardList /> */}
       <Footer />
     </div>
   </Router>
 );
}

export default App;
