import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Properties_list from './properties_list';
import Services from './services';
import { Link } from 'react-router-dom';

export default function AppHeader() {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      <Navbar.Brand href="#home" className= "brand"><span className= "ani-text"><b>Hotel</b>-<i>Reservations</i></span></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
