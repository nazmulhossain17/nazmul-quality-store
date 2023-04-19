import React from 'react';
import Layout from '../../../components/Layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import AdminMenu from '../../../components/Layout/AdminMenu/AdminMenu';

const CreateProduct = () => {
    return (
        <Layout>
            <Container className="mt-3">
      <Row>
        <Col md={3}>
          <AdminMenu />
        </Col>
        <Col md={9}>
          <h1>Create Product</h1>
        </Col>
      </Row>
    </Container>
        </Layout>
    );
};

export default CreateProduct;