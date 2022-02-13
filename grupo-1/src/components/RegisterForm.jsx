import React from "react";
import { Link } from "react-router-dom";
// import localAPI from "../utils/localAPI";

const RegisterForm = () => {
  // const registro = () => {
  //   const body = {
  //     username: "hello",
  //     email: "hola@gmail.com",
  //     password: "20chapas",
  //     role: "Author",
  //   };
  //   localAPI
  //     .post("api/auth/local/register", body)
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="body d-flex">
      <img
        className="img-register"
        src="/assets/img/ArquitectoFondo.png"
        alt=""
      />
      <div className="limiter-register d-flex justify-content-center align-items-center">
        <Link to="/">
          <i className="bi bi-box-arrow-left icono-register mx-4 my-3" />
        </Link>
        <div className="form-register px-5 text-light">
          <form>
            <h3 className=" p-b-43">Registre su información</h3>
            <div className="d-flex flex-column py-3 ">
              <label htmlFor="usuario">Usuario</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="text"
                name="usuario"
                placeholder="Example"
              />
            </div>
            <div className="d-flex flex-column py-3 ">
              <label htmlFor="email">Email</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="d-flex flex-column py-3">
              <label htmlFor="password">Password</label>
              <input
                className="py-2 px-2 mt-2 input-register"
                type="password"
                name="password"
                placeholder="xxxxxxxx"
              />
            </div>
            <div className="mt-5">
              <button className="boton-register p-2">Registrar</button>
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
