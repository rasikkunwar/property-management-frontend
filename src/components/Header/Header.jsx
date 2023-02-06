import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <React.Fragment>
      <header className="App-header">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">SRNA</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link to="/"><Link to="/" className="nav-link">Home</Link></Nav.Link>
              <Nav.Link><Link to="login" className="nav-link">Login</Link></Nav.Link>
              <Nav.Link><Link to="sign-up" className="nav-link">Sign Up</Link></Nav.Link>
              <Nav.Link><Link to="table" className="nav-link">Table</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </React.Fragment>
  );
}
