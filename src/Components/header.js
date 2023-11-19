import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Properties_list from './properties_list';
import Services from './services';
import { Link } from 'react-router-dom';
import { useRef } from "react";


export default function AppHeader() {
const homeRef = useRef(null);
const aboutRef =useRef(null);
const contactRef = useRef(null);
const servicesRef =useRef(null);

const scrollToSection = (elementRef) => {
  if ( elementRef && elementRef.current) {
  window.scrollTo({
    top: elementRef. current.offsetTop,
    behavior:'smooth'
  })
}
};

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home" className= "brand"><span className= "ani-text"><b>Hotel</b>-<i>Reservations</i></span></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => scrollToSection (homeRef)} as={Link} to="/">Home</Nav.Link>
          <Nav.Link onClick={() => scrollToSection (aboutRef)} as={Link} to="/about">About</Nav.Link>
          <Nav.Link onClick={() => scrollToSection (contactRef)} as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link onClick={() => scrollToSection (servicesRef)} as={Link} to="/services">Services</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
