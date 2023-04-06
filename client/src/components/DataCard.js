import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';



import MoreDataCard from './MoreDataCard';

const DataCard = ({moreData}) => {




  return (
    <Card style={{ width: '33%', display: 'flex' }}>
      <Card.Header style={{ backgroundColor: '#f8caaa' }}>
      
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign:'center' }}>Detailed Data </span>
        
        
      </Card.Header>
      <ListGroup variant="flush" style={{ flex: 1 }}>
        <MoreDataCard text='Compression Depth' moreData={moreData} unit='mm' />
        <MoreDataCard text='Compression Rate' moreData={moreData} unit='bpm' />
      </ListGroup>
    </Card>
  );
};

export default DataCard;