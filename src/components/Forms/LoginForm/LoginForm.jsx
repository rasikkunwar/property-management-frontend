import axios from 'axios';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { getAllUsers } from '../../../services/apis/Endpoints';
import ToastBar from '../../Toaster/ToastBar';
import { Toaster } from 'react-hot-toast';
import "./LoginForm.css"


const LoginForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const validCredential = (email, password) => {
        // TODO VALIDATE THROUGH REST API
        return false
    }

    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        if (validCredential(email, password)) {
            <ToastBar message={"Logged In Successfully!"} />
            // navigate("/table")
        } else {
            <ToastBar message={"Failure !"} />
        }


    }

    return (

        <div className='form-container'>
            <Toaster />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        ref={emailRef} />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        ref={passwordRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={e => handleLogin(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default LoginForm