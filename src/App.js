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

        <main>
        <Routes>
        <Route ref={Home} path="/" element={<Home />} />
          <Route  ref={About} path="/about" element={<About />} />
          <Route  ref={Contact} path="/contact" element={<Contact />} />
        </Routes>
      </main>

      </header>
    
    </div>
  );
}

export default App;
