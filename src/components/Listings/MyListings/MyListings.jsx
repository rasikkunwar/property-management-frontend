import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "./MyListings.css";
import axios from "axios";
import { getAllUsers } from "../../../services/apis/Endpoints";
import WaitLoader from "../../Spinners/WaitLoader";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from "../../../store/myListings/myListings";
import { useNavigate } from "react-router-dom";

const MyListings = () => {
  const listings = useSelector((state) => state.myListings.listings);

  const navigate = useNavigate()

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchListings());
  }, []);


  return (
    <React.Fragment>
      <WaitLoader></WaitLoader>

      <div className="table-container">
        <div className="table-title">
          <p>My Listings</p>
          <Button
            className="add-property-btn"
            size="sm"
            variant="secondary"
            onClick={e => navigate("/add-property")}
          >
            Add Property
          </Button>
        </div>


        <Table striped bordered hover>
          <thead>
            <tr>
              <th># ID</th>
              <th>User Name</th>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              listings.map((user, id) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.fullname}</td>
                    <td>{user.address}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.role}</td>
                    <td className="icon-btn-container">
                      <Button className="icon-btn" variant="danger">
                        <RiDeleteBin5Fill />
                      </Button>
                      <Button
                        variant="primary"
                        className="icon-btn">
                        <RiEdit2Fill color="white" />
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <div className="table-pagination-container">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyListings;
