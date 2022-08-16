import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

function ModalPreencher(props) {
  const [setShow] = useState(false);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Preencha Todos os Campos!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <p>Para efetuar o Login é necessário preencher todos os campos.</p>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPreencher;
