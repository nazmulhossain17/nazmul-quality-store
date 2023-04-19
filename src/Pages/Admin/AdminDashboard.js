import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu/AdminMenu';
import { Row, Col, Card } from "react-bootstrap";
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
    const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <Row>
          <Col md={3}>
            <AdminMenu />
          </Col>
          <Col md={9}>
            <Card className="w-75 p-3">
              <Card.Title>
                <h3>Admin Name : {auth?.user?.name}</h3>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  <h3>Admin Email : {auth?.user?.email}</h3>
                  <h3>Admin Contact : {auth?.user?.phone}</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};
  
export default AdminDashboard;