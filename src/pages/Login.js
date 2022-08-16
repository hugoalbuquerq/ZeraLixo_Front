import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar";
import { axiosInstance } from "../config/axios";

import ModalPreencher from "../components/modals/ModalPreencher";
import ModalServidor from "../components/modals/ModalServidor";

function Login() {
  const { setToken } = useContext(UserContext);
  const [modalShowPreencher, setModalShowPreencher] = useState(false);
  const [modalShowModalServidor, setShowModalServidor] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/perfil");
    }
  }, [navigate]);

  const [login, setLogin] = useState({
    email: "",
    senha_idcond: "",
  });

  function submitLogin(e) {
    e.preventDefault();
    if (login.email === "" || login.senha_idcond === "") {
      setModalShowPreencher(true);
    } else {
      axiosInstance.post("/api/auth/login", login).then((res) => {
        console.log(res);
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token);
          setToken(res.data.token);
          navigate("/perfil");
        } else {
          setShowModalServidor(true);
        }
      });
    }
  }

  return (
    <div>
      <>
        <Navbar />
        <form className="form-signin w-25 mt-5  m-auto pt-5 ">
          <h3 className=" mb-3 text-center">
            Login <i className="fa-solid fa-building-user me-2"></i>
          </h3>
          <div className="mb-3">
            <label>E-mail </label>
            <input
              value={login.email}
              onChange={(e) => {
                setLogin({ ...login, email: e.target.value });
              }}
              type="email"
              name="email"
              className="form-control"
              placeholder="E-mail"
            />
          </div>
          <div className="mb-3">
            <label>Senha</label>
            <input
              value={login.senha_idcond}
              onChange={(e) => {
                setLogin({ ...login, senha_idcond: e.target.value });
              }}
              type="password"
              className="form-control"
              placeholder="Senha"
            />
          </div>

          <div className="d-grid">
            <button
              onClick={submitLogin}
              type="submit"
              className="btn btn-success"
            >
              Entrar
            </button>
          </div>
          <p className="forgot-password text-right">
            Esqueceu a <a href="/esqueciminhasenha">senha?</a>
          </p>
        </form>

        <div className="d-grid gap-2 mx-auto pb-5">
          <ModalServidor
            show={modalShowModalServidor}
            onHide={() => setShowModalServidor(false)}
          />
          <ModalPreencher
            show={modalShowPreencher}
            onHide={() => setModalShowPreencher(false)}
          />
        </div>
      </>
    </div>
  );
}
export default Login;
