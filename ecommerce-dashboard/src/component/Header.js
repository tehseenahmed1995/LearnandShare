import {  Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {  Link , useHistory} from 'react-router-dom';


function Header()
{
    const history = useHistory()
    let user = JSON.parse(localStorage.getItem('user_info'))
    function logOut()
    {
        localStorage.clear()
        history.push("/register")
        
    }
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">MR-T</Navbar.Brand>
                    <Nav className="me-auto navbar_wrapper">
                    {
                        localStorage.getItem('user_info') ?
                        <>
                        <Link to="/">List Products</Link>
                        <Link to="/add">Add Products</Link>
                        <Link to="/update">Update Products</Link>
                        </>
                        :
                        <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                    }
                    
                    
                
                    </Nav>
                    {(localStorage.getItem('user_info')) ?
                    <Nav>
                    <NavDropdown title={user && user.name}>
                    <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    : null
                }
            </Navbar>
        </div>
    )

}

export default Header;