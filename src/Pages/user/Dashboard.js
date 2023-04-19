import React from 'react';
import Layout from '../../components/Layout/Layout';
import Card from "react-bootstrap/Card";
import UserMenu from '../../components/Layout/UserMenu/UserMenu';
import { useAuth } from '../../context/auth';

const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <Card className="w-75 p-3">
              <Card.Title>{auth?.user?.name}</Card.Title>
              <Card.Text>{auth?.user?.email}</Card.Text>
              <Card.Text>{auth?.user?.address}</Card.Text>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
    );
};

export default Dashboard;