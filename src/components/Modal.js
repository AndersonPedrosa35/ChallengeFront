import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalGenerate({ context, children }) {
  const { state, func } = context;
  return (
        <Modal
          show={ state }
          onHide={() => func(!state)}
          fullscreen="xl-down"
          className="modalGenerate"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Hello
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { children }
          </Modal.Body>
        </Modal>
  );
}
