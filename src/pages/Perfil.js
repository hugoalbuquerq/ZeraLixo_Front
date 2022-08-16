import Navbar2 from "../components/navbar2";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../config/axios";
import Avatar from "../images/avatar.png";
import CardGroup from "react-bootstrap/CardGroup";
import ModalPerfil from "./ModalPerfil";
import tomate from "../images/tomate.jpg";
import coentro from "../images/coentro.jpg";
import cenoura from "../images/cenoura.png";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function Perfil() {
  const [modalShow, setModalShow] = useState(false);

  const [task, setTask] = useState("");

  const [itemsList, setItemsList] = useState(["Limpar área das composteiras"]);

  function handleChangeInput(e) {
    const inputTask = e.target.value;
    setTask(inputTask);
  }

  function handleAddItemToList(e) {
    e.preventDefault(); // <----- desabilita o refresh na pagina ao enviar um formulário

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  }

  function deleteItem(index) {
    let tmpArray = [itemsList];
    tmpArray.splice(index, 1);

    setItemsList(tmpArray);
  }

  return (
    <div>
      <Navbar2 />
      {/* Card Perfil */}

      <Container className="py-5">
        <Row>
          <Col className="col-12  col-lg-4 col-md-6">
            <Card
              className="shadow mb-3"
              style={{
                width: "18rem",
                height: "18rem",
                background: " #54c48e",
              }}
            >
              <Card.Img
                src={Avatar}
                alt="avatar"
                className="rounded-circle img-fluid mt-2"
                style={{
                  width: "130px",
                  marginLeft: "28%",
                  background: "white",
                }}
              />
              <Card.Body>
                <Card.Title className="text-light fw-bold text-center">
                  Luisa Sonza
                </Card.Title>
                <Card.Text className="text-light fw-bold text-center">
                  <p>20 Pontos</p>
                </Card.Text>
                <>
                  <Button
                    variant="success"
                    onClick={() => setModalShow(true)}
                    className="btn  shadow-sm"
                    style={{ marginLeft: "28%" }}
                  >
                    Editar Perfil
                  </Button>

                  <ModalPerfil
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </>
              </Card.Body>
            </Card>
          </Col>

          {/* Card Task */}
          <Col className="col-lg-8 col-md-6">
            <Card className="text-center  mb-4">
              <Card.Header
                className="fw-bold h3 text-white"
                style={{ background: " #54c48e" }}
              >
                <i className="fa-solid fa-list-check me-2"></i> Tarefas
              </Card.Header>
              <h6 className="mb-3 mt-5 fw-bold">Adicione uma Tarefa</h6>
              <Form.Group
                className="p-3 justify-content-center  d-flex align-items-center"
                controlId="exampleForm.ControlTextarea1"
              >
                <input
                  className="input-group  form-control "
                  type="text"
                  name="title"
                  onChange={handleChangeInput}
                  value={task}
                />
                <Button
                  className="btn btn-success btn-md ms-2 fw-bold"
                  type="submit"
                  onClick={handleAddItemToList}
                >
                  ADD
                </Button>
              </Form.Group>

              <ul className="list-group mb-5 mt-5">
                {itemsList.map((item, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 m-2 mt-3"
                    key={index}
                  >
                    <input className="form-check-input " type="checkbox" />
                    {item}

                    <a title="Remove item" onClick={() => deleteItem(index)}>
                      <i className="fas fa-times text-danger"></i>
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Card troca de pontos */}
            <Row>
              <Col className="col-lg-12">
                <Card className="text-center">
                  <Card.Header
                    className="fw-bold h3 text-white"
                    style={{ background: " #54c48e" }}
                  >
                    <i className="fa-solid fa-arrow-right-arrow-left me-2"></i>{" "}
                    Troca de Pontos
                  </Card.Header>
                </Card>

                <CardGroup>
                  <Card>
                    <Card.Img
                      className="img-fluid"
                      variant="top"
                      src={tomate}
                    />
                    <Card.Body>
                      <Card.Title style={{ marginLeft: "30%" }}>
                        Tomates
                      </Card.Title>
                      <Card.Text>
                        O tomate é uma boa fonte de vitaminas A, C e do complexo
                        B. O mesmo também possui quantidades significativas de
                        sais minerais, como Ferro, Potássio, Cálcio, Magnésio,
                        além de conter pouquíssimas calorias.
                      </Card.Text>
                      <button
                        type="submit"
                        className="btn btn-success"
                        style={{ marginLeft: "32%" }}
                      >
                        Trocar
                      </button>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      className="img-fluid "
                      variant="top"
                      src={coentro}
                      style={{ width: "81.5%" }}
                    />
                    <Card.Body>
                      <Card.Title style={{ marginLeft: "30%" }}>
                        Coentro
                      </Card.Title>
                      <Card.Text>
                        O coentro contém propriedades digestivas e
                        anti-inflamatórias, ajudando a combater a má digestão e
                        a constipação. Tambem diminui a pressão arterial e
                        auxiliar no tratamento da diabetes.
                      </Card.Text>
                      <br></br>
                      <button
                        type="submit"
                        className="btn btn-success "
                        style={{ marginLeft: "32%" }}
                      >
                        Trocar
                      </button>
                    </Card.Body>
                  </Card>

                  <Card>
                    <Card.Img
                      className="img-fluid "
                      variant="top"
                      src={cenoura}
                      style={{
                        width: "81.5%",
                      }}
                    />
                    <Card.Body>
                      <Card.Title style={{ marginLeft: "30%" }}>
                        Cenoura
                      </Card.Title>
                      <Card.Text>
                        A cenoura é rica em sais minerais, como ferro e cálcio,
                        vitaminas K, A, C, E e do complexo B. Por isso ela ajuda
                        na saúde dos olhos, pele e até do cérebro, além de ter
                        influência positiva no colesterol.
                      </Card.Text>
                      <button
                        type="submit"
                        className="btn btn-success"
                        style={{ marginLeft: "32%" }}
                      >
                        Trocar
                      </button>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Perfil;
