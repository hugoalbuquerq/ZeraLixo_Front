import React, { useState } from "react";
import Navbar from "../components/navbar";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { axiosInstance } from "../config/axios";

function Cadastro() {
  const [cad, setCad] = useState({
    nome: "",
    nascimento: "",
    cpf: "",
    email: "",
    senha_idcond: "",
    andar: "",
    n_apt: "",
    bloco: "",
    cep: "",
    endereco: "",
    n_endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    funcao: "",
  });

  function enviarDados(e) {
    e.preventDefault();
    axiosInstance.post("/api/moradores", cad).then((res) => {
      alert("Cadastro realizado com sucesso!");
      console.log(res.data);
    });
  }

  return (
    <div>
      <Navbar />
      <form className="form-signin w-50 mt-5  m-auto pt-5 pb-5">
        <h3 className=" mb-3 text-center">Cadastre-se</h3>
        <Row className="mb-3">
          {/* nome completo*/}
          <Form.Group as={Col} sm={6}>
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              value={cad.nome}
              onChange={(e) => {
                setCad({ ...cad, nome: e.target.value });
              }}
              type="text"
              placeholder="Nome completo"
            />
          </Form.Group>

          {/* email*/}
          <Form.Group as={Col} sm={6} controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              value={cad.email}
              onChange={(e) => {
                setCad({ ...cad, email: e.target.value });
              }}
              type="email"
              placeholder="E-mail"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {/* cpf*/}
          <Form.Group as={Col} sm={6}>
            <Form.Label>CPF</Form.Label>
            <Form.Control
              value={cad.cpf}
              onChange={(e) => {
                setCad({ ...cad, cpf: e.target.value });
              }}
              type="text"
              placeholder="Digite seu CPF"
            />
          </Form.Group>

          {/* data de nasc*/}
          <Form.Group as={Col} sm={6} controlId="formGridEmail">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              value={cad.nascimento}
              onChange={(e) => {
                setCad({ ...cad, nascimento: e.target.value });
              }}
              type="date"
            />
          </Form.Group>
        </Row>

        {/* senha*/}
        <Row className="mb-3">
          <Form.Group as={Col} sm={6}>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              value={cad.senha_idcond}
              onChange={(e) => {
                setCad({ ...cad, senha_idcond: e.target.value });
              }}
              type="password"
              placeholder="ID do seu condom??nio"
            />
          </Form.Group>

          {/* fun????o*/}
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Fun????o</Form.Label>
            <Form.Select
              onChange={(e) => {
                setCad({ ...cad, funcao: e.target.value });
              }}
              defaultValue="Escolha..."
            >
              <option>Escolha...</option>
              <option value="Regar">Regar</option>
              <option value="Colher">Colher</option>
              <option value="Limpar">Limpar</option>
              <option value="Plantar">Plantar</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* andar*/}
        <Row className="mb-3">
          <Form.Group as={Col} md={3} sm={6}>
            <Form.Label>Seu andar</Form.Label>
            <Form.Control
              value={cad.andar}
              onChange={(e) => {
                setCad({ ...cad, andar: e.target.value });
              }}
              type="number"
              placeholder="Escolha seu andar"
            />
          </Form.Group>

          <Form.Group as={Col} md={3} sm={6}>
            <Form.Label>Seu bloco</Form.Label>
            <Form.Control
              value={cad.bloco}
              onChange={(e) => {
                setCad({ ...cad, bloco: e.target.value });
              }}
              type="text"
              placeholder="Bloco"
            />
          </Form.Group>

          {/* num apt*/}
          <Form.Group as={Col} md={3} sm={6}>
            <Form.Label>N?? do apt</Form.Label>
            <Form.Control
              value={cad.n_apt}
              onChange={(e) => {
                setCad({ ...cad, n_apt: e.target.value });
              }}
              type="number"
              placeholder="N??mero do seu apt"
            />
          </Form.Group>

          {/* CEP*/}
          <Form.Group as={Col} md={3} sm={6} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              value={cad.cep}
              onChange={(e) => {
                setCad({ ...cad, cep: e.target.value });
              }}
              placeholder="CEP"
            />
          </Form.Group>
        </Row>

        {/* Endereco*/}
        <Row>
          <Form.Group
            as={Col}
            lg={9}
            className="mb-3"
            controlId="formGridAddress1"
          >
            <Form.Label>Endere??o</Form.Label>
            <Form.Control
              value={cad.endereco}
              onChange={(e) => {
                setCad({ ...cad, endereco: e.target.value });
              }}
              placeholder="Endere??o"
            />
          </Form.Group>

          <Form.Group
            as={Col}
            lg={3}
            className="mb-3"
            controlId="formGridAddress1"
          >
            <Form.Label>N??mero</Form.Label>
            <Form.Control
              value={cad.n_endereco}
              onChange={(e) => {
                setCad({ ...cad, n_endereco: e.target.value });
              }}
              type="number"
              placeholder="N?? endere??o "
            />
          </Form.Group>
        </Row>
        {/* Bairro*/}
        <Row className="mb-3">
          <Form.Group as={Col} lg={4} sm={12} controlId="formGridPassword">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              value={cad.bairro}
              onChange={(e) => {
                setCad({ ...cad, bairro: e.target.value });
              }}
              id="bairro"
              name="bairro"
              placeholder="Bairro"
            />
          </Form.Group>

          {/* cidade*/}
          <Form.Group as={Col} lg={4} sm={12} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              value={cad.cidade}
              onChange={(e) => {
                setCad({ ...cad, cidade: e.target.value });
              }}
              placeholder="Cidade"
            />
          </Form.Group>

          {/* Estado*/}
          <Form.Group as={Col} lg={4} sm={12} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              onChange={(e) => {
                setCad({ ...cad, estado: e.target.value });
              }}
              defaultValue="Escolha"
            >
              <option>Escolha...</option>
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amap??">Amap??</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Cear??">Cear??</option>
              <option value="Esp??rito Santo">Esp??rito Santo</option>
              <option value="Goi??s">Goi??s</option>
              <option value="Maranh??o">Maranh??o</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Par??">Par??</option>
              <option value="Paraiba">Paraiba</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piau??">Piau??</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rond??nia">Rond??nia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="S??o Paulo">S??o Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
              <option value="Distrito Federal">Distrito Federal</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className="d-grid mb-3">
          <button
            onClick={(e) => enviarDados(e)}
            type="submit"
            className="btn btn-success"
          >
            Cadastrar
          </button>
        </div>
        <p className="forgot-password text-right">
          J?? tem cadastro? <a href="/login">Entre aqui</a>
        </p>
      </form>
    </div>
  );
}
export default Cadastro;
