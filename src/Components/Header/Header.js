import React from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return(
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="logo" width="80" height="80"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">El amaranto</Nav.Link>
            <Nav.Link href="#">En la red</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Sobre nosotros</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
       
    )
}

export default Header;
