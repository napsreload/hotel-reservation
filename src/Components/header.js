import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Properties_list from './properties_list';
import Services from './services';

export default function AppHeader() {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };
    return (
        <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home" className= "brand"><span className= "ani-text"><b>Hotel</b>-<i>Reservations</i></span></Navbar.Brand>
        <Navbar.Collapse id="nav-text">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#services">services</Nav.Link>
            <Nav.Link href="#filter">filter</Nav.Link>
            <Properties_list />

          </Nav>
        </Navbar.Collapse>
      </Container>
      {showServices && <Services />} {/* Display Services component when showServices is true */}
    </Navbar>
    )
}