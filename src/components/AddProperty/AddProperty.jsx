import React from 'react'
import { Button, Form } from 'react-bootstrap'
import unitedStates from '../../static/States/State'
import "./AddProperty.css"

const AddProperty = () => {

    const addressStates = unitedStates

    return (
        <>
            <div className='page-header'><p className='title'>Add Property</p></div>
            <div className='add-property-container'>
                <Form>

                    {/* TITLE */}
                    <div className='row'>
                        <Form.Group className="mb-4" controlId="formBasicTitle">
                            <Form.Label>Property Title</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                placeholder="Property Title"
                            />
                        </Form.Group>
                    </div>

                    {/* Description */}
                    <div className='row'>
                        <Form.Group className="mb-4" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                placeholder="Description"
                            />
                        </Form.Group>
                    </div>

                    {/* Address */}
                    <div className='row'>
                        <p>Address</p>
                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control type="text" placeholder="Enter Street" />
                            </Form.Group>
                        </div>
                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" placeholder="Enter City" />
                            </Form.Group>
                        </div>
                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicState">
                                <Form.Label>State</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option disabled>Choose State</option>
                                    {addressStates.map(state => {
                                        return <option
                                            key={state.abv}
                                            value={state.name}>{state.name}</option>
                                    })}
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicAddress">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" />
                            </Form.Group>
                        </div>
                    </div>
                    {/* 
                    <div className='row'>
                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPropertyType">
                                <Form.Label>Property Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label>Property Option</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicUserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Name" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicUserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Name" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicUserName">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Name" />
                            </Form.Group>

                        </div>

                        <div className='col-sm'>
                            <Form.Group className="mb-4" controlId="formBasicPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </div>
                    </div> */}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>


        </>

    )
}

export default AddProperty