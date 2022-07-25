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
<<<<<<< HEAD
import Gallery from "./pages/gallery/Gallery";
=======
>>>>>>> origin/master

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
<<<<<<< HEAD
                <Route path="gallery" element={<Gallery/>} />
=======
>>>>>>> origin/master
            </Routes>
        </Router>
    </div>
  );
}

export default App;
