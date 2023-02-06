import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useLocation } from "react-router-dom";
export default function Header() {
  const {pathname} = useLocation()
  return (
    <React.Fragment>
      {pathname != '/login' && pathname != '/sign-up' && <header className="App-header">
        <Navbar>
          <Container>
            <Navbar.Brand href="/">SRNA</Navbar.Brand>
            <Nav>
              <Nav.Link to="/">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="table" className="nav-link">
                  Table
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="login" className="nav-link">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
}
    </React.Fragment>
  );
}
