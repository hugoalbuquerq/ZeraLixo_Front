import React from "react";
import Navbar from "../components/navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import horta from "../images/horta.jpg";
import zeralixo from "../images/zeralixo.jpeg";
import composteira from "../images/composteira.png";
import Container from "react-bootstrap/Container";

function Comofunciona() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <h1 className=" text-center fw-bold mt-5 text-dark">
            <i className="fa-solid fa-gears me-2"></i>
            Como Funciona o ZeraLixo
            <i className="fa-solid fa-gears ms-2"></i>
          </h1>
          <Col lg={4} md={12} className="d-flex justify-content-center">
            {["Success"].map((variant) => (
              <Card
                className="shadow"
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "3rem",
                }}
              >
                <Card.Img
                  className=" mt-3 img-fluid "
                  variant="top"
                  src={horta}
                  style={{ width: "18rem", height: "9rem" }}
                />
                <Card.Header className="text-center">Horta</Card.Header>
                <Card.Body>
                  <Card.Title>Montagem da Horta </Card.Title>
                  <Card.Text className="mb-2">
                    Após contratar o serviço, a equipe do Zera Lixo irá ao
                    condomínio para montar toda a estrutura da horta.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            {["Info"].map((variant) => (
              <Card
                className="shadow"
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "3rem",
                }}
              >
                <Card.Img
                  className=" mt-3 img-fluid "
                  variant="top"
                  src={composteira}
                  style={{ width: "18rem", height: "9rem" }}
                />
                <Card.Header className="text-center">
                  Composteira e Minhocario
                </Card.Header>
                <Card.Body>
                  <Card.Title> Disponibilização </Card.Title>
                  <Card.Text className="mb-2">
                    A Zera Lixo também disponibilinazará as composteiras e os
                    minhocários, sendo que eles serão totalmente mantidos e
                    cuidados pelo proprio condomínio.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            {["Danger"].map((variant) => (
              <Card
                className="mb-5 shadow"
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{
                  width: "18rem",
                  height: "25rem",
                  marginTop: "3rem",
                }}
              >
                <Card.Img
                  className=" mt-3 mb-3  img-fluid "
                  variant="top"
                  src={zeralixo}
                  style={{ width: "18rem" }}
                />
                <Card.Header className="text-center ">Zera Lixo</Card.Header>
                <Card.Body>
                  <Card.Title> Plataforma Zera Lixo </Card.Title>
                  <Card.Text className="mb-2">
                    O condomínio terá acesso a plataforma do Zera Lixo, assim
                    seus moradores teram acesso aos seus perfis onde eles iram
                    realizar as Tasks referentes a Horta.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Comofunciona;
