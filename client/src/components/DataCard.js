import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';



import MoreDataCard from './MoreDataCard';

const DataCard = ({moreData}) => {


    const depthData = moreData.slice(3, 6);
    const rateData = moreData.slice(6, 9);


  return (
    <Card style={{ width: '33%', display: 'flex' }}>
      <Card.Header style={{ backgroundColor: '#f8caaa' }}>
      
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign:'center' }}>Detailed Data </span>
        
        
      </Card.Header>
      <ListGroup variant="flush" style={{ flex: 1 }}>
        <MoreDataCard text='Compression Depth' moreData={depthData} unit='mm' />
        <MoreDataCard text='Compression Rate' moreData={rateData} unit='bpm' />
      </ListGroup>
    </Card>
  );
};

export default DataCard;