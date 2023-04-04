import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';



const ProgressCard = ({text, progress}) => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
      <div style={{ flex: '0 0 30%', display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
      <span style={{  fontSize: '1.25rem' }}>{text}</span>
      </div>
      <div style={{ flex: '0 0 70%', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
        {progress > 75 ? (
                <ProgressBar style={{flex: '1'}} variant='success' now={progress} label= {`${progress}%`}/> 
              ) : (<ProgressBar style={{flex: '1'}}  variant='danger' now={progress} label= {`${progress}%`}/> )}

        </div>
    </Card>
  );
};

export default ProgressCard;
