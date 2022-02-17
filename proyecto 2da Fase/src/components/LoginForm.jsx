import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import seguridadAPI from "../utils/seguridadAPI";

const LoginForm = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const body = {
      Usuario: usuario,
      Password: password,
    };
    seguridadAPI
      .post("loginUsuario", body)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("id", res.data.id_user);
        navigate("/contact");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="body d-flex">
      <img className="img-register" src="/assets/img/trabajadores.jpg" alt="" />
      <div className="limiter-login d-flex justify-content-center align-items-center">
        <Link to="/">
          <i className="bi bi-box-arrow-left icono-login mx-4 my-3" />
        </Link>

        <div className="form-register px-5">
          <form>
            <h3 className=" p-b-43">Iniciar Sesion</h3>
            <div className="d-flex flex-column py-3 ">
              <label htmlFor="usuario">Usuario</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="text"
                name="usuario"
                placeholder="Example"
                onChange={(event) => setUsuario(event.currentTarget.value)}
              />
            </div>
            <div className="d-flex flex-column py-3">
              <label htmlFor="password">Password</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="password"
                name="password"
                placeholder="xxxxxxxx"
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
            </div>
            <div className="mt-5">
              <button className="boton-register p-2" onClick={(e) => login(e)}>
                Ingresar
              </button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2"> ¿no tienes cuenta? </span>
              <Link className="text-login-2" to="/register">
                | Registrate
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
