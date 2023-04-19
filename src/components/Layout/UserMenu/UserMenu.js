import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const UserMenu = () => {
    return (
        <>
      <h3>Dashboard</h3>
      <Nav defaultActiveKey="/dashboard/user" className="flex-column">
        <Nav.Link as={Link} to="/dashboard/user/profile" className="nav-link">Profile</Nav.Link>
        <Nav.Link as={Link} to="/dashboard/user/orders" className="nav-link">Orders</Nav.Link>
      </Nav>
    </>
    );
};

export default UserMenu;