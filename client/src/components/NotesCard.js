import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const NotesCard = ({ onCertify }) => {
  const [notes, setNotes] = useState('');
  const [facilitatorName, setFacilitatorName] = useState('');

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleFacilitatorNameChange = (event) => {
    setFacilitatorName(event.target.value);
  };

  const handleCertifyClick = () => {
    onCertify({
      notes,
      facilitatorName
    });
  };

  return (
    <Card style={{ width: '50%' }}>
      <Card.Header>Notes</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="notesInput">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={notes}
              onChange={handleNotesChange}
            />
          </Form.Group>

          <Form.Group controlId="certificationInput">
            <Form.Label>Should certification be granted?</Form.Label>
            <div>
              <Form.Check
                inline
                label="Yes"
                type="radio"
                name="certification"
                id="certification-yes"
              />
              <Form.Check
                inline
                label="No"
                type="radio"
                name="certification"
                id="certification-no"
              />
            </div>
          </Form.Group>

          <Form.Group controlId="facilitatorNameInput">
            <Form.Label>Facilitator Name</Form.Label>
            <Form.Control
              type="text"
              value={facilitatorName}
              onChange={handleFacilitatorNameChange}
            />
            <Form.Text className="text-muted">
              Please enter your full name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="certifyButton">
            <Button onClick={handleCertifyClick}>Certify</Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
