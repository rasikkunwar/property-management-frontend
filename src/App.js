import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import SignUp from "./components/Forms/SignUp/SignUp";
import ListUser from "./components/Tables/ListUsers/ListUsers";
import ListUsers from "./components/Tables/ListUsers/ListUsers";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      {/* <div className="Banner">
        <img src="/banner.jpeg" alt="Banner" />
      </div>
      <div className="Property-container">
        <p className="Property-title">Properties</p>
        <div className="Property-list">
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg"/>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src="/banner.jpeg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card> 

    </div>
      </div >
      */}

      {/* <LoginForm /> */}
      {/* <SignUp /> */}
      <ListUsers />
    </div >

  );
}

export default App;
