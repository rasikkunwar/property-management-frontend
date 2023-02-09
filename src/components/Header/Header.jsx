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
  function logout() {
    AuthService.logout();
    navigate("/");
  }
  return (
    <React.Fragment>
      {pathname != "/login" && pathname != "/sign-up" && (
        <header className="App-header">
          <Navbar>
            <Container>
              <Navbar.Brand href="/">SRNA</Navbar.Brand>
              <Nav>
                {/* <Nav.Link to="/">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </Nav.Link> */}
                {isAuthenticated && userDetail.role === "OWNER" && (
                  <>
                    <Nav.Link>
                      <Link to="owner/dashboard" className="nav-link">
                        Dashboard
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="my-properties" className="nav-link">
                        My Properties
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="properties-offers" className="nav-link">
                        Offers
                      </Link>
                    </Nav.Link>
                  </>
                )}

                {isAuthenticated && userDetail.role === "CUSTOMER" && (
                  <React.Fragment>
                    <Nav.Link>
                      <Link to="my-applications" className="nav-link">
                        My Applications
                      </Link>
                    </Nav.Link>

                    <Nav.Link>
                      <Link to="my-favorites" className="nav-link">
                        My Favorites
                      </Link>
                    </Nav.Link>
<<<<<<< HEAD
                  </React.Fragment>
                )}
                {isAuthenticated && userDetail.role === "ADMIN" && (
                  <React.Fragment>
                    <Nav.Link>
                      <Link to="admin-dashboard" className="nav-link">
                        Dashboard
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="users" className="nav-link">
                        Users
                      </Link>
                    </Nav.Link>
=======
>>>>>>> 93decdcb9b72d60a81f99e9f554a78fb932850d7
                  </React.Fragment>
                )}
              </Nav>
              <Nav>
                {isAuthenticated ? (
                  <Nav.Link>{userDetail.username}</Nav.Link>
                ) : (
                  <Nav.Link>
                    <Link to="login" className="nav-link">
                      Login
                    </Link>
                  </Nav.Link>
                )}
                {isAuthenticated && (
                  <div>
                    <Nav.Link
                      onClick={() => {
                        logout();
                      }}
                    >
                      Logout
                    </Nav.Link>
                  </div>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
      )}
    </React.Fragment>
  );
}
