import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"
export default function Property() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Card Title",
      text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
        id: 2,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 3,
        title: "Card Title",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 4,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 5,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 6,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 7,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 8,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 9,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 10,
        title: "Card Title",
        text: " Some quick example text to build on the card title and make up the bulk of the card's content.",
      },

  ]);
  const propertiesComponent = properties && properties.map((item) => {
    return <Link to={`property/${item.id}`}><Card style={{ width: "18rem" }} className="mb-5">
      <Card.Img variant="top" src="/banner.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  })

  return (
    <React.Fragment>
      {propertiesComponent}
    </React.Fragment>
  );
}
