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
import RecordsModal from './components/RecordsModal';


function App() {
  const [data, setData] = useState({ readings: []});
  const [userInfo, setUserInfo] = useState({ name: '', dob: '', sessionId: '', date: '' });

  const [showModal, setShowModal] = useState(true);
  const [showRecordsModal, setShowRecordsModal] = useState(false);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ notes: '', facilitatorName: '', certification: false });

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
  const handleCertify = (data) => {
    setFormData({
      ...formData,
      notes: data.notes,
      facilitatorName: data.facilitatorName,
      certification: data.certification
    });
    
    fetch('/certify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: data, userInfo: userInfo })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Certification response:', data);
    })
    .catch(error => {
      console.error('Error certifying:', error);
    });
  };
  

  const handleGetRecordsButtonClick = () => {
    fetch('/records')
      .then((res) => res.json())
      .then((records) => {
        if (Array.isArray(records) && records.length > 0) {
          setRecords(records);
          console.log(records);
          setShowRecordsModal(!showRecordsModal);
        } else {
          console.log('No records found.');
          console.log(records);
        }
      })
      .catch((error) => console.log('Error fetching records:', error));
  };
  const handleRecordsModalClose = () => {
    setShowRecordsModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sessionId = `${userInfo.name}${userInfo.dob}`.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0).toString(16);
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    setUserInfo({...userInfo, sessionId: sessionId, date: formattedDate});
    setShowModal(false);
  };


  

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
        <Modal.Header>
          <Modal.Title>Please Enter Candidate Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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
      <CustomNavbar showModal={() => setShowModal(true)} handleGetRecordsButtonClick={handleGetRecordsButtonClick} />
      <RecordsModal show={showRecordsModal} onHide={handleRecordsModalClose} records={records} onClose={handleRecordsModalClose}/>

      <div>
        <CandidateInfoCard userInfo={userInfo} handleButtonClick={handleButtonClick} />


      </div>
      {(data.readings.length === 0 || data.readings[1] === "254" || data.readings[1] === "255" )? (
        <p style={{ fontSize: '2rem', textAlign: 'center' }}>No readings yet</p>
      ) : (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ReadingsCard readings={data.readings} />
            <DataCard moreData={data.readings} />
            <NotesCard onCertify={handleCertify} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
