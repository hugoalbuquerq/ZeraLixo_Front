import React from "react";
import Navbar from "../components/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "../images/condimage.png";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col className="col-md-6 col-sm-12 col-12">
            <div className=" mt-5 pt-5">
              <h1
                className="banner-title "
                style={{
                  fontWeight: "bold",
                  fontSize: "45px",
                }}
              >
                Transforme o seu lixo orgânico em vida!
              </h1>
              <p className="banner-description">
                O lixo orgânico que você produz contribui para um menor tempo
                <br /> de vida na terra. Mas o seu condomínio pode fazer
                diferente.
              </p>
              <Button
                className="me-3"
                variant="outline-success"
                onClick={() => navigate("/cadcondominio")}
              >
                Quero no meu condominio
              </Button>

              <Button variant="success" onClick={() => navigate("/logincad")}>
                Login do condomínio
              </Button>
            </div>
          </Col>
          <Col className="col-md-6 ">
            <div className=" mt-4 pt-4">
              <img className="img-fluid" src={Image} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Home;
