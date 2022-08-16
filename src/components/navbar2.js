import logo from "../images/logo.svg";

import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

function Navbar2() {
  const [modalSair, showModalSair] = useState(false);

  const ModalSair = (props) => {
    const { setToken } = useContext(UserContext);
    let navigate = useNavigate();

    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Body>
          <h4>Deseja sair?</h4>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div className="row">
            <div className="col">
              <Button className="px-86 btn" onClick={props.onHide}>
                Cancelar
              </Button>
            </div>
            <div className="col"></div>
            <div className="col">
              <Button
                className="px-86 btn btn-danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken("");
                  navigate("/");
                }}
              >
                Sair
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand ms-5 " href="#">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            background: "#f8f9fa",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/sobrenos"
              >
                Sobre Nós
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/comofunciona"
              >
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-white text-uppercase ms-5"
                aria-current="page"
                href="/contato"
              >
                Contato
              </a>
            </li>
          </ul>

          <button
            className="btn btn-danger me-5 ms-5"
            aria-current="page"
            onClick={() => {
              showModalSair(true);
            }}
          >
            Sair
          </button>
          <ModalSair show={modalSair} onHide={() => showModalSair(false)} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
