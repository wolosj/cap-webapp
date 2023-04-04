import React from 'react';
import { Card } from 'react-bootstrap';

const MoreDataCard = ({text, moreData}) => {

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '10px 10px 0', fontWeight: 'bold', fontSize: '1.25rem' }}>
        {text}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px' }}>
        <div>
          <span style={{ fontWeight: 'bold' }}>Min:</span> {moreData[0]}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Max:</span> {moreData[1]}
        </div>
        <div>
          <span style={{ fontWeight: 'bold' }}>Avg:</span> {moreData[2]}
        </div>
      </div>
    </Card>
  );
};

export default MoreDataCard;
