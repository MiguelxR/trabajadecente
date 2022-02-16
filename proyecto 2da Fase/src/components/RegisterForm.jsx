import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import seguridadAPI from "../utils/seguridadAPI";
// import localAPI from "../utils/localAPI";

const RegisterForm = () => {
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const newUser = (e) => {
    e.preventDefault();
    const body = {
      Usuario: usuario,
      Nombre: nombre,
      Password: password,
      Email: email,
      Telefono: telefono,
      Rol: "",
    };
    seguridadAPI
      .post("CrearUsuarios", body)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="body d-flex">
      <img
        className="img-register"
        src="/assets/img/ArquitectoFondo.png"
        alt=""
      />
      <div className="limiter-register d-flex justify-content-center align-items-center">
        <Link to="/">
          <i className="bi bi-box-arrow-left icono-register mx-4 my-2" />
        </Link>
        <div className="form-register px-5 text-light">
          <form className="formulario-registro">
            <h3 className="mt-5">Registre su información</h3>
            <div className="d-flex flex-column py-2 ">
              <label htmlFor="usuario">Usuario</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="text"
                name="usuario"
                placeholder="Example"
                onChange={(event) => setUsuario(event.currentTarget.value)}
              />
            </div>
            <div className="d-flex flex-column py-2 ">
              <label htmlFor="nombre">Nombre</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="text"
                name="nombre"
                placeholder="Example"
                onChange={(event) => setNombre(event.currentTarget.value)}
              />
            </div>
            <div className="d-flex flex-column py-2 ">
              <label htmlFor="telefono">Telefono</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="text"
                name="telefono"
                placeholder="Example"
                onChange={(event) => setTelefono(event.currentTarget.value)}
              />
            </div>
            <div className="d-flex flex-column py-2 ">
              <label htmlFor="email">Email</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
            </div>
            <div className="d-flex flex-column py-2">
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
              <button
                className="boton-register p-2"
                onClick={(e) => newUser(e)}
              >
                Registrar
              </button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2"> ¿tienes cuenta? </span>
              <Link className="text-login" to="/login">
                | Logueate
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
