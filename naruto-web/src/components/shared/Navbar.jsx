import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Crud from "../../pages/Crud";

const Navbar = () => {
  const navigate = useNavigate();
  const borrarToken = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container px-4">
        <a href="#" className="navbar-brand">
          <img src="./assets/img/naruto.png" width="100" alt="" />
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar_menu"
          aria-controls="navbar_menu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div id="navbar_menu" className="navbar-collapse collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              {!localStorage.getItem("token") ? (
                <a className="nav-link" href="#">
                  About
                </a>
              ) : (
                <Link className="nav-link" to="/favoritos">
                  Favoritos
                </Link>
              )}
            </li>
            <li className="nav-item dropdown">
              <a
                id="drop_products"
                className="nav-link dropdown-toggle"
                href=""
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="drop_products">
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    All Products{" "}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Comics{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    {" "}
                    Series{" "}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <div className="d-flex">
              <Link to="/register" className="btn btn-outline-dark">
                SingUp
              </Link>
              <Link to="/login" className="btn btn-outline-dark m-4 mb-0 mt-0">
                Login
              </Link>
            </div>
          ) : (
            <div className="d-flex">
              <Crud></Crud>
              <Link to="/">
                <button
                  onClick={borrarToken}
                  type="button"
                  className="btn btn-outline-secondary m-4 mb-0 mt-0"
                >
                  Cerrar Sesion
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
