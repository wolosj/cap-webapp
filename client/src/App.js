import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import ReadingsCard from './components/ReadingsCard';
import NotesCard from './components/NotesCard';
import CustomNavbar from './components/CustomNavbar';
import CandidateInfoCard from './components/CandidateInfoCard';
import DataCard from './components/DataCard';

function App() {
  const [data, setData] = useState({ readings: [], records: [] });
  const [userInfo, setUserInfo] = useState({ name: '', dob: '' });
  const [showModal, setShowModal] = useState(true);

  const handleButtonClick = () => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData({ ...data, readings: data.readings });
        console.log(data);
      }
    );
  };

  const handleGetRecordsButtonClick = () => {
    fetch("/records")
      .then(res => res.json())
      .then(data => {
        if (data.records.length === 0) {
          console.log("No records found.");
          console.log(data.records);
        } else {
          setData({ ...data, records: data.records });
          // console.log(data);
        }
      })
      .catch(error => console.log("Error fetching records:", error));
  };
  
  

  const handleUserInfoSubmit = (event) => {
    event.preventDefault();
    setShowModal(false);
  }

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header>
          <Modal.Title>Please Enter Candidate Information</Modal.Title>
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
      <div>
        <CandidateInfoCard name={userInfo.name} dob={userInfo.dob} handleButtonClick={handleButtonClick} />
        <Button onClick={handleGetRecordsButtonClick}/> 
      </div>
      {(data.readings.length === 0 || data.readings[1] === "254" || data.readings[1] === "255" )? (
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>No readings yet</p>
      ) : (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ReadingsCard readings={data.readings} />
            <DataCard moreData={data.readings} />
            <NotesCard results={data.readings} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
