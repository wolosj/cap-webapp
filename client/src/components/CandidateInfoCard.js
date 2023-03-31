import React from 'react';
import { Card } from 'react-bootstrap';

const CandidateInfoCard = ({ name, dob }) => {
  const sessionId = `${name}${dob}`.split('').reduce((acc, curr) => acc + curr.charCodeAt(0), 0).toString(16);

  const date = new Date();
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <Card bg="dark" text="white">
      <Card.Body>
        <Card.Title style={{ fontSize: '5rem', textAlign: 'center' }}>{name}</Card.Title>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>{formattedDate}</Card.Text>
        <Card.Text style={{ fontSize: '2rem', textAlign: 'center' }}>Session ID: {sessionId}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CandidateInfoCard;
