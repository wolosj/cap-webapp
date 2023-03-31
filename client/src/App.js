import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import ReadingsCard from './components/ReadingsCard';
import NotesCard from './components/NotesCard';
import CustomNavbar from './components/CustomNavbar';
import CandidateInfoCard from './components/CandidateInfoCard';


function App() {
  const [data, setData] = useState({readings: []});
  const [userInfo, setUserInfo] = useState({ name: '', dob: '' });
  const [showModal, setShowModal] = useState(true);

  const handleButtonClick = () => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    );
  };

  const handleUserInfoSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
  }

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Please Enter Your Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUserInfoSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Birth:</Form.Label>
              <Form.Control type="date" value={userInfo.dob} onChange={(e) => setUserInfo({ ...userInfo, dob: e.target.value })} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <CustomNavbar showModal={() => setShowModal(true)} />
      
      <Button onClick={handleButtonClick}>Check for Results</Button>
      
      {data.readings.length === 0 ? (
        <p>No readings yet</p>
      ) : (
        <div>
        <div><CandidateInfoCard name={userInfo.name} dob={userInfo.dob} /></div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
           
          <ReadingsCard readings={data.readings} />
          <NotesCard results={data.readings} />
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
