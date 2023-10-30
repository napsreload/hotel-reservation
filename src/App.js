import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHero from './Components/hero';
import About from './Components/about';
import Contact from './Components/contact';
import Home from './Components/home'; // Make sure to import the Home component

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
        <AppHero />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
