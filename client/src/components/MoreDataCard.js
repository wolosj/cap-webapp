import React from 'react';
import { Card } from 'react-bootstrap';

const MoreDataCard = ({text, moreData, unit}) => {

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '10px 10px 0', fontWeight: 'bold', fontSize: '1.5rem' }}>
        {text}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{fontSize: '1.25rem' }}>Min: {moreData[0]}{unit}</span> 
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{fontSize: '1.25rem' }}>Max: {moreData[1]}{unit}</span> 
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{fontSize: '1.25rem' }}>Avg: {moreData[2]}{unit}</span> 
        </div>
      </div>
    </Card>
  );
};

export default MoreDataCard;
