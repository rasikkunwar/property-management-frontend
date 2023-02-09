import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import WaitLoader from "../Spinners/WaitLoader";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers, changeStatus } from "../../store/users/users";
import Button from "react-bootstrap/Button";

import "./Users.css";

const Users = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  function changeActiveStatus(id) {
    dispatch(changeStatus(id));
  }
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <React.Fragment>
      <WaitLoader />
      {!users && (
        <div>
          <p>No Data</p>
        </div>
      )}
      {users && (
        <div className="table-container">
          <div className="table-title">
            <p>Users</p>
          </div>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th># S.N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Username</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user && user.role && user.role.roleName}</td>
                    <td>
                      <p
                        className={
                          user.isActive ? "text-success" : "text-danger"
                        }
                      >
                        {user.isActive ? "Active" : "InActive"}
                      </p>
                    </td>
                    <td>
                      {user &&
                        user.isActive &&
                        user.role &&
                        user.role.roleName === "OWNER" && (
                          <Button
                            variant="outline-danger"
                            onClick={() => changeActiveStatus(user.id)}
                          >
                            InActive
                          </Button>
                        )}
                      {user &&
                        !user.isActive &&
                        user.role &&
                        user.role.roleName === "OWNER" && (
                          <Button
                            variant="outline-success"
                            onClick={() => changeActiveStatus(user.id)}
                          >
                            Active
                          </Button>
                        )}
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

export default Users;
