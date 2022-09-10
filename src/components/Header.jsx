import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './bottuns/Login';
import Signup from './bottuns/Signup';
import CartBtn from './bottuns/CartBtn';
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <div className='shadow ' >
            <Navbar bg="light" expand="lg">
                <Container fluid className='py-2'>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" >

                        <Nav className="me-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }} navbarScroll >
                            <NavLink  to="/" aria-current="page" className='link my-auto fs-5 fw-bold me-3 text-dark'
                             >Home</NavLink>
                            <NavLink to="/Products" className="link me-2 text-secondary" >Products</NavLink>
                            <NavLink to="/About" className="link me-2 text-secondary" >About</NavLink>
                            <NavLink to="/Contact" className="link me-2 text-secondary" >Contact</NavLink>
                        </Nav>

                        <Navbar.Brand to="/" className='mx-auto fw-bold' style={{ letterSpacing: "2px", textDecoration:"none"}}>
                        <NavLink to="/" className="text-dark" style={{textDecoration:"none"}}>My First Electronic Market</NavLink></Navbar.Brand>
                    <Login />
                    <Signup />
                    <CartBtn />
                    
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