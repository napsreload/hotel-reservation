import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Properties_list from './properties_list';



export default function AppHeader() {
    return (
        <Navbar expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="#home" className= "brand">Hotel-Reservations</Navbar.Brand>
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
    </Navbar>
    )
}