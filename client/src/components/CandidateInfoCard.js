import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiRefresh } from 'react-icons/bi';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';


const CandidateInfoCard = ({ name, dob, handleButtonClick }) => {
  const sessionId = `${name}${dob}`.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0).toString(16);
  const date = new Date();
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Card >
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Card.Title style={{ fontSize: '3rem', textAlign: 'center' }}>
          
          <FaUser size={50} /> 
          {'    '}
          {name}
          
        </Card.Title>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>
          <FaCalendarAlt size={40} />
          {'    '}
          {formattedDate}
          
          </Card.Text>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>Session ID#: {sessionId}</Card.Text>
        <Button onClick={handleButtonClick}>
        <BiRefresh size={70}/>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CandidateInfoCard;
