import { Container, Navbar, Nav } from 'react-bootstrap';
import {  Link } from 'react-router-dom';


function Header()
{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">MR-T</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">

                    <Link to="/add">Add Products</Link>
                    <Link to="/update">Update Products</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                
                    </Nav>
            </Navbar>
        </div>
    )

}

export default Header;