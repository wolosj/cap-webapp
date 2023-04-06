import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';



import ProgressCard from './ProgressCard';

const ReadingsCard = ({readings}) => {

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  return (
    <Card style={{ width: '33%', display: 'flex' }}>
      <Card.Header style={{ backgroundColor: '#f8caaa' }}>
      
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign:'center' }}>Candidate Progress</span>
        
        
      </Card.Header>
      <ListGroup variant="flush" style={{ flex: 1 }}>
        <Card style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <div style={{ flex: '0 0 30%', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
            <span style={{  fontSize: '1.25rem' }}>Hands On Time</span>
          </div>
            <div style={{ flex: '0 0 70%', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{formatTime(readings[9])}</span>
            </div>
        </Card>
        <ProgressCard progress={readings[0]} text='Correct Depth' />
        <ProgressCard progress={readings[1]} text='Correct Rate'/>
        <ProgressCard progress={readings[2]} text='Correct Recoil'/>
      </ListGroup>
    </Card>
  );
};

export default ReadingsCard;