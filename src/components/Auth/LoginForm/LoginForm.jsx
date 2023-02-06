import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { redirect, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./LoginForm.css"
import CustomToastBar from '../../Toaster/CustToastBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokenAfterLogin } from '../../../store/auth/auth';

const LoginForm = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [validated, setValidated] = useState(false);


    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            if (dispatch(fetchTokenAfterLogin(email, password)) !== null) {
                toast.success("Logged In")
                navigate("/my-listings")
            } else {
                toast.error("Failed to Login")
            }

            setLoading(false)
        }

        setValidated(true);
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