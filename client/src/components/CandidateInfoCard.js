import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiRefresh } from 'react-icons/bi';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';


const CandidateInfoCard = ({ userInfo, handleButtonClick }) => {
  return (
    <Card >
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Title style={{ fontSize: '3rem', textAlign: 'center' }}>
          <FaUser size={50} /> {'    '} {userInfo.name}
        </Card.Title>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>
          <FaCalendarAlt size={40} /> {'    '} {userInfo.date}
        </Card.Text>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>Session ID#: {userInfo.sessionId}</Card.Text>
        <Button onClick={handleButtonClick}>
          <BiRefresh size={70}/>
        </Button>
      </Card.Body>
    </Card>
  );
};



export default CandidateInfoCard;
