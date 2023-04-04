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
        <MoreDataCard text='Compression Depth' moreData={moreData} />
        <MoreDataCard text='Compression Rate' moreData={moreData} />
        <MoreDataCard text='Recoil' moreData={moreData} />
      </ListGroup>
    </Card>
  );
};

export default DataCard;