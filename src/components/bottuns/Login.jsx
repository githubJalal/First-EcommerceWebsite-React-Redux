import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" className='ms-2' onClick={handleShow}
            data-bs-toggle="modal" data-bs-target="#loginModel">
                <span className='fa fa-sign-in me-1'></span>Login
            </Button>

            <Modal show={show} id='loginModel' onHide={handleClose} tabIndex="-1"> 
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Button variant="primary" className='w-100 mb-3'>
                        <span className='fa fa-google me-2'></span>Sign in With Google
                    </Button>

                    <Button variant="primary" className='w-100 mb-3'>
                        <span className='fa fa-facebook me-2'></span>Sign in With facebook
                    </Button>

                    <Form onSubmit={(event) => event.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label htmlFor='exampleInputEmail1'>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label htmlFor='exampleInputPassword1'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="outline-primary" className='w-100 mt-5' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default Login