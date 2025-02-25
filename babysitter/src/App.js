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
        </Routes>
       {/* <CardList /> */}
       <Footer />
     </div>
   </Router>
 );
}

export default App;
