import React from 'react';
import Layout from '../../../../components/Layout/Layout';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserMenu from '../../../../components/Layout/UserMenu/UserMenu';

const Profile = () => {
    return (
        <Layout>
            <Container fluid className="p-3 m-3 dashboard">
      <Row>
        <Col md={3}>
          <UserMenu />
        </Col>
        <Col md={9}>
          <h1>Profile</h1>
        </Col>
      </Row>
    </Container>
        </Layout>
    );
};

export default Profile;