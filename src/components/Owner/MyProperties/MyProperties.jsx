import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import WaitLoader from "../../Spinners/WaitLoader";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { BiShow, BiHide } from "react-icons/bi"
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "../../../store/myListings/myListings";
import { useNavigate } from "react-router-dom";
import "./MyProperties.css";

const MyProperties = () => {
  const listings = useSelector((state) => state.myListings.listings);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleUpdate = (propertyId) => {
    navigate(`/update-property/${propertyId}`)
  }

  useEffect(() => {
    dispatch(fetchListings());
  }, []);

  return (
    <React.Fragment>
      <WaitLoader />
      {!listings && <div>
        <p>No Data</p></div>}
      {listings && (
        <div className="table-container">
          <div className="table-title">
            <p>My Properties</p>
            <Button
              className="add-property-btn"
              size="sm"
              variant="secondary"
              onClick={(e) => navigate("/add-property")}
            >
              Add Property
            </Button>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th># S.N</th>
                <th>Property Title</th>
                <th>Views</th>
                {/* <th>Offers Made</th> */}
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((property, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{property.title}</td>
                    <td>{property.propertyViewCount ? property.propertyViewCount : "No Views"}</td>
                    <th>{property.status}</th>
                    {/* <td>{property.offers}</td> */}
                    <td className="icon-btn-container">
                      <Button className="icon-btn" variant="outline-success" title="Show Property">
                        <BiShow />
                      </Button>
                      <Button className="icon-btn" variant="outline-danger" title="Hide Property">
                        <BiHide />
                      </Button>
                      <Button variant="outline-primary" className="icon-btn" title="Update Property"
                        onClick={e => handleUpdate(property.id)}>
                        <RiEdit2Fill />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

        </div>
      )}
    </React.Fragment>
  );
};

export default MyProperties;
