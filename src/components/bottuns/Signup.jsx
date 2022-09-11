import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" className='ms-2' onClick={handleShow}
        data-bs-toggle="modal" data-bs-target="#signupModel">
        <span className='fa fa-user-plus me-1'></span>Register
      </Button>

      <Modal show={show} id='signupModel' onHide={handleClose} tabIndex="-1">
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Button variant="primary" className='w-100 mb-3'>
            <span className='fa fa-google me-2'></span>Sign up With Google
          </Button>

          <Button variant="primary" className='w-100 mb-3'>
            <span className='fa fa-facebook me-2'></span>Sign up With facebook
          </Button>

          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label htmlFor='input'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label htmlFor='exampleInputEmail1'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label htmlFor='inputPassword'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label htmlFor='inputPassword'>Repit Password</Form.Label>
              <Form.Control type="password" placeholder="Repit Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="outline-primary" className='w-100 mt-3' type="submit">
              Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Signup