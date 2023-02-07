import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { useSelector } from "react-redux";
export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthenticated = AuthService.isAuthenticated();
  const userDetail = useSelector((state) => state.auth.user_detail);
  function logout(){
    AuthService.logout();
    navigate("/login")
  }
  return (
    <React.Fragment>
      {pathname != "/login" && pathname != "/sign-up" && (
        <header className="App-header">
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
                  <Link to="my-listings" className="nav-link">
                    My Listings
                  </Link>
                </Nav.Link>
              </Nav>
              <Nav>
                {isAuthenticated ? (
                 <Nav.Link>{userDetail.name}</Nav.Link>
                  
                ) : (
                  <Nav.Link>
                    <Link to="login" className="nav-link">
                      Login
                    </Link>
                  </Nav.Link>
                )}
                {isAuthenticated && <div><Nav.Link onClick={()=>{
                  logout()
                }}>Logout</Nav.Link></div>}
              </Nav>
            </Container>
          </Navbar>
        </header>
      )}
    </React.Fragment>
  );
}
