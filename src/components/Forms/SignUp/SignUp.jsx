import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./SignUp.css"


const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault()
        alert("Signed Up")
    }

    return (
        <div className='signup-form-container'>
            <Form>
                <div className='row'>
                    <div className='col-sm'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" />
                        </Form.Group>
                    </div>

                    <div className='col-sm'>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
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
                    </div>

                </div>
                <Button variant="primary" type="submit" onClick={e => handleSignUp(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp