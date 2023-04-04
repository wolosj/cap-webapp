import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';

const CustomNavbar = ({ showModal }) => {
  return (
    <Navbar style={{ backgroundColor: '#f8caaa' }}>
      <Container fluid>
        <Navbar.Brand>
          <img
            src="/logo.png"
            width="75"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="mx-auto" >
          <Navbar.Text style={{ color:'black',fontSize: '36px', marginRight: '32px', fontWeight: 'bold', textAlign: 'center'}}>Smart CPR Student Dashboard</Navbar.Text>
        </Nav>
        <Nav>
          <Nav.Link onClick={showModal}>
            <FaEdit size={40}/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
