import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { UserContext } from "../App";
import { axiosInstance } from "../config/axios";

function ModalPerfil(props) {
  let navigate = useNavigate();
  const [setShow] = useState(false);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Perfil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  value="Luisa Sonza"
                  placeholder="Nome completo"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="e-mail"
                  value="luisa.sonza@gmail.com"
                  placeholder="E-mail"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  disabled
                  type="password"
                  value="62f6a3d1e0625fcd553ff580"
                  placeholder="ID do seu condomínio"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Função</Form.Label>

                <Form.Select defaultValue="Limpar">
                  <option>Escolha...</option>
                  <option>Regar</option>
                  <option>Colher</option>
                  <option>Limpar</option>
                  <option>Plantar</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Seu andar</Form.Label>
                <Form.Control
                  disabled
                  type="number"
                  value="10"
                  placeholder="Escolha seu andar"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nº do apt</Form.Label>
                <Form.Control
                  disabled
                  type="number"
                  value="1002"
                  placeholder="Número do seu apt"
                />
              </Form.Group>
            </Row>
          </Row>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Deletar conta
        </Button>
        <Button variant="success" onClick={props.onHide}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalPerfil;
