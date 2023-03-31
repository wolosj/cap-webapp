import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaCog } from 'react-icons/fa';

const CustomNavbar = ({ showModal }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="https://dummyimage.com/50x50/000/fff"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="mx-auto">
          <Navbar.Text>Smart CPR Student Dashboard</Navbar.Text>
        </Nav>
        <Nav>
          <Nav.Link onClick={showModal}>
            <FaCog />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
