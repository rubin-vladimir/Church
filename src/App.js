import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Routes} from "react-router";
import About from "./pages/About";
import Home from "./pages/home/Home";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import Gallery from "./pages/gallery/Gallery";

const App = () => {
  return (
    <div>
      <Header />
        <Router>
            <Routes>
                <Route path="home" element={< Home/>} />
                <Route exact path="about" element={<About/>} />
                <Route path="contacts" element={<Contacts/>} />
                <Route path="blog" element={<Blog/>} />
                <Route path="gallery" element={<Gallery/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
