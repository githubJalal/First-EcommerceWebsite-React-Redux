import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './bottuns/Login';
import Signup from './bottuns/Signup';
import CartBtn from './bottuns/CartBtn';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className='page-header shadow' >
            <Navbar bg="light" expand="lg">
                <Container fluid className='py-1'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-between'>

                        <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }} navbarScroll >
                            <NavLink to="/" aria-current="page" className='link my-auto fs-5 fw-bold me-3 text-dark'
                            >Home</NavLink>
                            <NavLink to="/Products" className=" link me-2 text-secondary" >Products</NavLink>
                            <NavLink to="/About" className="link me-2 text-secondary" >About</NavLink>
                            <NavLink to="/Contact" className="link me-2 text-secondary" >Contact</NavLink>
                        </Nav>

                        <Navbar.Brand className='mx-auto' style={{ letterSpacing: "2px" }}>
                            <NavLink to="/" className="link fw-bold fs-1 text-dark me-5" >First Electronic Market</NavLink></Navbar.Brand>
                        <div className='d-flex'>
                        <Login />
                        <Signup />
                        <CartBtn />
                        </div>

                        {/* <Form className="d-flex ms-2">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                        </Form> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header