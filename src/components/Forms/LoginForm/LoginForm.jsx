import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./LoginForm.css"
import CustomToastBar from '../../Toaster/CustToastBar';


const LoginForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [token, setToken] = useState()
    const [loading, setLoading] = useState(false)
    const [validated, setValidated] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            if (validCredential(email, password)) {
                toast.success("Logged In")
                navigate("/table")
            } else {
                toast.error("Failed to Login")
            }
        }

        setValidated(true);
    };


    const validCredential = (email, password) => {
        if (email === "abc@mail.com" && password === "1234") {
            setLoading(true)
            let token = "<5DjL#,X>6+E|gz9yaycaS|u#&T72MZ?RIgN-l5BsaIV~xvG]7aFnB?Mg7RI*={"
            // TODO VALIDATE THROUGH REST API
            localStorage.setItem("token", JSON.stringify(token))
            setLoading(false)
            return true
        } else {
            return false
        }
    }

    return (
        <>
            <CustomToastBar />
            <div className='form-container'>

                <Form noValidate validated={validated} onSubmit={e => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            required
                            placeholder="Enter email"
                            ref={emailRef} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            required
                            placeholder="Password"
                            ref={passwordRef} />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default LoginForm