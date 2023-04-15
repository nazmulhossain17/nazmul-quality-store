import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {RiShoppingBag3Fill} from 'react-icons/ri'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className='nv'>
      <Container>
        <Navbar.Brand href="#home">Nazmul-Quality-Store <RiShoppingBag3Fill/></Navbar.Brand>
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
            <Nav.Link>
               <Link className='text-decoration-none text-white' to='/login'>Sign in</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;