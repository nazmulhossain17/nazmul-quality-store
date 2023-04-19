import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <h3>Admin Panel</h3>
      <Nav defaultActiveKey="/dashboard/admin/create-category" className="flex-column">
        <Nav.Link as={Link} to="/dashboard/admin/create-category" className="nav-link">Create Category</Nav.Link>
        <Nav.Link as={Link} to="/dashboard/admin/create-product" className="nav-link">Create Product</Nav.Link>
        <Nav.Link as={Link} to="/dashboard/admin/users" className="nav-link">Users</Nav.Link>
      </Nav>
    </>
  );
};

export default AdminMenu;