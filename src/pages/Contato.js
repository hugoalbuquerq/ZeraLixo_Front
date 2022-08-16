import React from "react";
import Navbar from "../components/navbar";
import Character from "../images/moca.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contato() {
  return (
    <div>
      <Navbar />
      <Row>
        <Col className="col-lg-4 col-md-12 col-sm-12 col-12">
          <img className="img-fluid ms-5 " src={Character} />
        </Col>
        <Col className="col-lg-8 ">
          <form className="form-signin w-75 mt-5  m-auto pt-5 pb-5">
            <h2 className=" mb-10 text-center fw-bold mb-5 text-success">
              <i class="fa-solid fa-headphones-simple me-2"></i>FALE CONOSCO
            </h2>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control type="text" placeholder="Nome completo" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Telefone</Form.Label>
                <Form.Control type="tel" placeholder="(DDD) 99999-9999" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Assunto</Form.Label>
                <Form.Control type="text" placeholder="Assunto" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder=" " />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Enviar
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  );
}
export default Contato;
