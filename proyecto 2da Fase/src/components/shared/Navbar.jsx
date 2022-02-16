import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-0 pt-3 py-3 px-5 sect-navbar ">
      <div className="d-flex align-self-center justify-content-between">
        <div className="w-25 ">
          <img className="w-100" src="/assets/img/logo.png" alt="Cargando..." />
        </div>
        <div className="d-flex align-self-center justify-content-center hidden-xs">
          <Link to="#">
            <button className="text-light botones-nav mx-1">Inicio</button>
          </Link>
          <Link to="#">
            <button className="text-light botones-nav mx-1">
              Sobre nosotros
            </button>
          </Link>
          <Link to="#">
            <button className="text-light botones-nav mx-1">Servicios</button>
          </Link>
          <Link to="#">
            <button className="text-light botones-nav mx-1">Noticias</button>
          </Link>
          <Link to="#">
            <button className="text-light botones-nav mx-1">Contactanos</button>
          </Link>
          {localStorage.getItem("token") ? (
            <div>
              <p>Bienvenido</p>
              <Link to="/">
                <button className="text-light botones-nav mx-1">
                  Cerrar Sesion
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/register">
                <button className="text-light botones-nav mx-1">SingUp</button>
              </Link>
              <Link to="/login">
                <button className="text-light botones-nav mx-1">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
