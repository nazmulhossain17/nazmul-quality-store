import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
    return (
        <Navbar expand="lg" className='nv'>
      <Container>
        <Navbar.Brand href="#home">Nazmul-Quality-Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto sv">
            <Nav.Link href="#home">
                <Link className='text-decoration-none text-white' to='/'>Home</Link>
            </Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">
            <Link className='text-decoration-none text-white' to='/'>Cart</Link>
            </Nav.Link>
           
            {!auth?.user ? (
              <Nav>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <NavDropdown title={auth?.user?.name} id="navbar-dropdown">
                  <NavDropdown.Item href={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;