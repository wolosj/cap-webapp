import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { GrNotes } from 'react-icons/gr';

const NotesCard = ({ onCertify }) => {
  const [notes, setNotes] = useState('');
  const [facilitatorName, setFacilitatorName] = useState('');
  const [shouldCertify, setShouldCertify] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleFacilitatorNameChange = (event) => {
    setFacilitatorName(event.target.value);
  };

  const handleCertifyClick = () => {
    onCertify({
      notes,
      facilitatorName,
      shouldCertify,
    });
    setFormSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCertifyClick();
  };

  const handleShouldCertifyChange = (event) => {
    setShouldCertify(event.target.value === 'Yes');
  };

  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [formSubmitted]);

  return (
    <Card style={{ width: '33%' }}>
      <Card.Header style={{ backgroundColor: '#f8caaa' }}>
        <span style={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center' }}>Notes</span>
        <GrNotes size={25} />
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
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
                value="Yes"
                onChange={handleShouldCertifyChange}
              />
              <Form.Check
                inline
                label="No"
                type="radio"
                name="certification"
                id="certification-no"
                value="No"
                onChange={handleShouldCertifyChange}
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
            <Button type="submit">Certify</Button>
            {formSubmitted && <span style={{ color: 'green', fontSize: '0.9rem' }}>Form Submitted</span>}
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NotesCard;
