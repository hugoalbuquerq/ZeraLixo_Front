import React from "react";
import Navbar from "../components/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Deboraimg from "../images/deboraimg.png";
import Mayara from "../images/mayaraimg.png";
import Hugoimg from "../images/hugoimg.png";
import Giullyimg from "../images/giullyimg.png";
import Deyseimg from "../images/deyseimg.png";
import Img1 from "../images/img1.png";
import Img3 from "../images/img3.png";
import Img4 from "../images/img4.png";
import Linkedin from "../images/linkedin.png";
import Github from "../images/github.png";
import Aboutus from "../images/aboutus.png";
import { useNavigate } from "react-router-dom";

function Sobrenos() {
  let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <div className="justify-content-center pt-5">
            <h2 className="pb-2 border-bottom fw-bold text-success">
              Porque ter o ZeraLixo no seu condomínio?
            </h2>

            <Container>
              <Row>
                <Col>
                  <h5 className="mt-5 mb-5">
                    Segundo a ONU nós estamos numa corrida contra uma catástrofe
                    climática <br />e o aumento de lixo nos aterros sanitários
                    contribui na piora da nossa situção.
                  </h5>
                  <ul className="">
                    <li>Composteira com minhocários </li>
                    <li>Horta vertical </li>
                    <li>Sistema online de troca de pontos por produto</li>
                  </ul>
                </Col>

                <Col className="d-flex justify-content-end pt-3">
                  <Card
                    className="ms-5 "
                    style={{
                      width: "18.5rem",
                      border: "6px solid white",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Img1} />
                  </Card>
                  <Card
                    className="ms-5 "
                    style={{
                      width: "14.06rem",

                      border: "6px solid white",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Img3} />
                    <Card.Img variant="bottom" src={Img4} />
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          <Row>
            <div className="container px-4 py-5" id="icon-grid">
              <h2 className="pb-2 border-bottom fw-bold text-success">
                Funcionalidades do ZeraLixo{" "}
                <i className="fa-solid fa-gears"></i>
              </h2>

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href=""></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      <i className="fa-solid fa-building-user me-2"></i>
                      Moradores
                    </h4>
                    <p>Moradores do condomínio, colaboradores da horta.</p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href=""></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      <i className="fa-solid fa-list-check me-2"></i>Tarefas
                    </h4>
                    <p>Tarefas para se fazer na horta. </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href="#calendar3"></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      <i className="fa-solid fa-arrow-right-arrow-left me-2"></i>
                      Troca de pontos
                    </h4>
                    <p>Sistema de troca de pontos por produtos na horta. </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href="#home"></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      <i className="fa-solid fa-building me-2"></i>Condomínios
                    </h4>
                    <p>
                      Condominios que possuem o sistema do Zera Lixo em seu
                      ambiente.{" "}
                    </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href="#speedometer2"></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      <i className="fa-solid fa-seedling me-2"></i> Horta
                      Vertical
                    </h4>
                    <p>Horta vertical adaptável ao espaço. </p>
                  </div>
                </div>
                <div className="col d-flex align-items-start">
                  <svg
                    className="bi text-muted flex-shrink-0 me-3"
                    width="1.75em"
                    height="1.75em"
                  >
                    <use href="#toggles2"></use>
                  </svg>
                  <div>
                    <h4 className="fw-bold mb-0 text-success">
                      {" "}
                      <i className="fa-solid fa-worm me-2"></i>Composteiras
                    </h4>
                    <p>Composteiras com minhocário. </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <div>
            <div className="justify-content-center pt-5">
              <h2 className="pb-2 border-bottom text-success fw-bold">
                Equipe ZeraLixo <i class="fa-solid fa-people-group"></i>
              </h2>

              <Row className="mb-5 mt-5">
                <Col className="d-flex justify-content-center">
                  <Card
                    className=" ms-2 mb-2"
                    style={{
                      border: "5px  solid white ",
                      width: "15rem",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Deboraimg} />
                    <Card.Body>
                      <Card.Title>Débora Pinto</Card.Title>
                      <a className="me-2" href="https://github.com/deboragrp">
                        <img
                          src={Github}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/d%C3%A9bora-pinto-8a77a420b/">
                        <img
                          src={Linkedin}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                  <Card
                    className="ms-2 mb-2 "
                    style={{
                      border: "5px  solid white ",
                      width: "15rem",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Mayara} />
                    <Card.Body>
                      <Card.Title>Mayara Ribeiro</Card.Title>
                      <a
                        className="me-2"
                        href="https://github.com/Mayara-Ribeiro"
                      >
                        <img
                          src={Github}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/mayara-ribeiro-/">
                        <img
                          src={Linkedin}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                  <Card
                    className="ms-2 mb-2"
                    style={{
                      border: "5px  solid white ",
                      width: "15rem",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Hugoimg} />
                    <Card.Body>
                      <Card.Title>Hugo França</Card.Title>
                      <a
                        className="me-2"
                        href="https://github.com/hugoalbuquerq"
                      >
                        <img
                          src={Github}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/hugo-albuqq/">
                        <img
                          src={Linkedin}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col className="d-flex justify-content-center">
                  <Card
                    className="ms-2 mb-5"
                    style={{
                      border: "5px  solid white ",
                      width: "15rem",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Giullyimg} />
                    <Card.Body>
                      <Card.Title>Giully Domingos</Card.Title>
                      <a
                        className="me-2 "
                        href="https://github.com/giullydomingos"
                      >
                        <img
                          src={Github}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/giully-domingos-bb1059247/">
                        <img
                          src={Linkedin}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Col>

                <Col className="d-flex justify-content-center">
                  <Card
                    className="ms-2 mb-5"
                    style={{
                      border: "5px  solid white ",
                      width: "15rem",
                      boxShadow:
                        "0 2px 5px 0 rgba(0, 48, 0, 0.5), 0 4px 15px 0 rgba(0, 48, 0, 0.5)",
                    }}
                  >
                    <Card.Img variant="top" src={Deyseimg} />
                    <Card.Body>
                      <Card.Title>Deysiane Vidal</Card.Title>
                      <a className="me-2" href="https://github.com/Deysividal">
                        <img
                          src={Github}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/deysiane-vidal-34595a196/">
                        <img
                          src={Linkedin}
                          style={{
                            width: "40px",
                          }}
                        />
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Sobrenos;
