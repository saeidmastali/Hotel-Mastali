
import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import Hotel from "./Hotel";
import Home from "./Home";
import 'animate.css';
import WOW from 'wowjs';
import BookRoom from "./Hotel/BookRoom";
const App =() => {
  new WOW.WOW({
    live: false
  }).init();
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Rooms" element={<Hotel/>} />
        <Route exact path="/BookRoom/:roomId" element={<BookRoom/>} />
        {/* <Route exact path="" element={<div>new page</div>} /> */}

      </Routes>
      <Footer/>
    </Router>
    // <h1>
    //   Hello world!
    // </h1>
  );
}

export default App;
