import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import './RecordsModal.css';

function RecordsModal(props) {
  const { records, show, onClose } = props;

  return (
    <Modal className="records-modal" show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Records</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {Array.isArray(records) && records.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Session ID</th>
                <th>Certification Date</th>
                <th>Notes</th>
                <th>Certification Granted</th>
                <th>Facilitator Name</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  <td>{record.Name}</td>
                  <td>{record.DOB}</td>
                  <td>{record.SessionID}</td>
                  <td>{record.CertificationDate}</td>
                  <td>{record.Notes}</td>
                  <td>{record.CertificationGranted}</td>
                  <td>{record.FacilitatorName}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <p>No records found.</p>
        )}
      </Modal.Body>
    </Modal>
  );
}

RecordsModal.propTypes = {
  records: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RecordsModal;
