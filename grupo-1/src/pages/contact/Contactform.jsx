import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./contactform.css";

const Contactform = () => {
  return (
    <div id="body">
      {/* header y navbar lateral */}
      <header
        style={{ backgroundColor: "rgb(66, 189, 236, 1)" }}
        className="sticky-top navbar-derechos"
      >
        <div className="nav flex-column">
          <div className="navbar">
            <nav className="navbar navbar-light fixed-top">
              <div className="container-fluid">
                <div className="navbar-brand" style={{ color: "white" }}>
                  <h1 className="Derechos-title">Contáctanos</h1>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  style={{ backgroundColor: "white" }}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <img src="imagenes/workers (1).png" alt="logo" />
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                      Trabaja Decente
                    </h5>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div
                    className="offcanvas-body"
                    style={{ backgroundColor: "#42bdec" }}
                  >
                    <ul className="navbar-nav flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link active"
                          aria-current="page"
                          href="index.html"
                        >
                          <img
                            src="imagenes/home.png"
                            alt="inicio"
                            width={50}
                            height={44}
                          />
                          Inicio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="derecho.html"
                        >
                          <img
                            src="imagenes/laws.png"
                            alt="derechos"
                            width={50}
                            height={44}
                          />
                          Derechos Laborales
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="tributos.html"
                        >
                          <img
                            src="imagenes/money-bag (1).png"
                            alt="tributacion"
                            width={50}
                            height={44}
                          />
                          Tributación
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="sunafil.html"
                        >
                          <img
                            src="imagenes/college.png"
                            alt="sunafil"
                            width={50}
                            height={44}
                          />
                          Sunafil
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          className="nav-link"
                          href="calculadora.html"
                        >
                          <i
                            className="fas fa-calculator"
                            style={{ fontSize: "45px", marginRight: "9px" }}
                          />
                          Calculadoras
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn align-text-center" type="submit">
                        Search
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
            <div />
          </div>
        </div>
      </header>
      {/* parrafo explicativo */}
      <div className="container m-4">
        <div className="container">
          <form action="action_page.php">
            <label htmlFor="fname">Nombre</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Tu nombre.."
            />
            <label htmlFor="lname">Apellidos</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Tu Apellido.."
            />
            <label htmlFor="fname">Email</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="email@ejemplo.com"
            />
            <label htmlFor="fname">Número de contacto</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder={928392677}
            />
            <label htmlFor="subject">Consulta</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Escribe algo.."
              style={{ height: "200px" }}
              defaultValue={""}
            />
            <input type="submit" defaultValue="Submit" />
          </form>
        </div>
      </div>
      {/* acordeones */}
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              {/* section 5 */}
              <div className="footer-container" />
              {/* footer Copyright */}
              <footer>
                <div className="footer-vertical">
                  <p>© Copyright ©2022 All rights reserved</p>
                </div>
              </footer>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
