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
          <Card style={{ width: "18rem" }} className="mb-5">
            <Card.Img variant="top" src="./banner.jpeg" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
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
