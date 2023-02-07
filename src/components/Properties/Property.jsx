import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../../store/property/property";
import WaitLoader from "../Spinners/WaitLoader";
export default function Property() {
  const properties = useSelector((state) => state.property.properties);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  const propertiesComponent =
    properties &&
    properties.map((item) => {
      return (
        <Link to={`property/${item.id}`}>
          <Card style={{ width: "20rem" }} className="mb-5">
            <Card.Img variant="top" src={"data:image/jpeg;base64,"+item.image} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>$ {item.price}</Card.Text>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.address}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    });

  return (
    <React.Fragment>
      <WaitLoader></WaitLoader>
      {propertiesComponent}
    </React.Fragment>
  );
}
