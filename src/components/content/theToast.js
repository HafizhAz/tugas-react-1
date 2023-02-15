import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function PlacementMultiExample() {
  const [position, setPosition] = useState('top-start');

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-white position-relative"
      style={{ minHeight: '240px' }}
    >
      <ToastContainer position="top-end" className="p-3">
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Budi</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>thats Cooll</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Anton</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>this React ??</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default PlacementMultiExample;