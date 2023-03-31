import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'


const ReadingsCard = ({readings}) => {


  return (
    <Card style={{ width: '50%' }}>
      <Card.Header>Candidate Progress</Card.Header>
      <ListGroup variant="flush">
        {readings.map((reading) => (
            <ListGroup.Item key={reading}>
              {reading > 75 ? (
                <ProgressBar variant='success' now={reading} label= {`${reading}%`}/> 
              ) : (<ProgressBar variant='danger' now={reading} label= {`${reading}%`}/> )}

            </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default ReadingsCard;