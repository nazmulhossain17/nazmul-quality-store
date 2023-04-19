import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#deded5' }} className="mt-auto py-3">
    <Container>
      <Row>
        <Col lg={6} md={12} className="mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>
            footer content
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
            voluptatem veniam, est atque cumque eum delectus sint!
          </p>
        </Col>
        <Col lg={3} md={6} className="mb-4">
          <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>
            links
          </h5>
          <ul className="list-unstyled mb-0">
            <li className="mb-1">
              <Link to='/about' style={{ color: '#4f4f4f' }}>
                About us
              </Link>
            </li>
            <li className="mb-1">
              <Link to='/contact' style={{ color: '#4f4f4f' }}>
                Contact us
              </Link>
            </li>
            <li className="mb-1">
              <Link to='/policy' style={{ color: '#4f4f4f' }}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </Col>
        <Col lg={3} md={6} className="mb-4">
          <h5 className="mb-1" style={{ letterSpacing: '2px', color: '#818963' }}>
            opening hours
          </h5>
          <table className="table" style={{ color: '#4f4f4f', borderColor: '#666' }}>
            <tbody>
              <tr>
                <td>Mon - Fri:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sat - Sun:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 MyWebsite.com
    </div>
  </footer>
  );
};

export default Footer;
