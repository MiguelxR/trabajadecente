import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* <!-- section 1 --> */}
      <div>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner section1">
            <div className="carousel-item active" data-bs-interval="5000">
              <img
                src="/assets/img/carousel1.jpg"
                className="d-block section1 w-100"
                alt="cargando..."
              />
              <div className="carousel-caption d-none d-md-block text-light">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/assets/img/carousel2.jpg"
                className="d-block section1 w-100"
                alt="Cargando..."
              />
              <div className="carousel-caption d-none d-md-block ">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img
                src="/assets/img/carousel3.jpg"
                className="d-block section1 w-100"
                alt="Cargando..."
              />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="decoration"></div>
      {/* <!-- section 2 --> */}
      <div className="section-2 d-flex flex-column justify-content-center align-items-center px-5">
        <div>
          <h2 className="text-center">Desafío</h2>
          <p className="text-section-2">
            La pandemia del covid-19 a afectado de manera negativa el
            crecimiento económico del Perú y a impulsado el desempleo, la
            informalidad y la precarización laboral. Es por ello que la
            Organización de las Naciones Unidas (ONU), mediante los Objetivos de
            Desarrollo Sostenible, propone como indispensable para el desarrollo
            inclusivo y sostenible de toda la sociedad, el objetivo numero 8:
            <strong> el trabajo decente.</strong>
          </p>
          <br />
        </div>

        <div className="d-flex justify-content-evenly">
          <div className="section2-a">
            <p className="text-left">
              La informalidad laboral es uno de los principales problemas
              socioeconómicos del Perú y es el causante de perpetuar la
              precarización, la explotación y discriminación, lamentablemente en
              el año 2021 se ha profundizado esta problemática en el país.
            </p>
          </div>
          <div className="section2-b d-flex justify-content-center align-items-center"></div>
        </div>
      </div>
      {/* <!-- section 3 --> */}
      <div className="section-3 d-flex flex-column justify-content-center align-items-center px-5">
        <div>
          <h2 className="text-center text-light">Sobre Nosotros</h2>
          <p className="text-left text-light">
            Creemos en que la educación es el pilar fundamental para el
            desarrollo y la solución de los problemas sociales del país, por eso
            Lorem es una plataforma informativa que busca asesorarte sobre tus
            derechos como trabajador y brindarte herramientas para que puedas
            calcular las prestaciones sociales que por ley te corresponden.
          </p>
          <br />
        </div>
        <div className="section-3-2 d-flex justify-content-evenly aling-items-center text-center">
          <div className="px-4 d-flex flex-column justify-content-center aling-items-center cards">
            <div className="div-img">
              <Link to="#">
                <img
                  className="img-card"
                  src="/assets/img/legal.png"
                  alt="derechos"
                />
              </Link>
            </div>
            <strong>Orientación de derechos laborales</strong>
            <p>
              Información de tus derechos laborales para que estés informado y
              los hagas cumplir conforme a la norma.
            </p>
          </div>
          <div className="px-4 d-flex flex-column justify-content-center aling-items-center cards mx-5">
            <div className="div-img">
              <Link to="#">
                <img
                  className="img-card"
                  src="/assets/img/tax.png"
                  alt="tributos"
                />
              </Link>
            </div>
            <strong>Orientacion de tributacion</strong>
            <p>
              Todo lo que nesecitas saber sobre tributación y cuales te
              corresponde pagar.
            </p>
          </div>

          <div className="px-4 d-flex flex-column justify-content-center aling-items-center cards">
            <div className="div-img">
              <Link to="#">
                <img
                  className="img-card"
                  src="/assets/img/calculator.png"
                  alt=" tributos"
                />
              </Link>
            </div>
            <strong>Calculadora de prestaciones sociales</strong>
            <p>
              Saca el calculo de la tributacion que te corresponden a pagar de
              manera sencilla y rápida.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- section 4 --> */}
      <div className="section-4 d-flex flex-column justify-content-center align-items-center px-5">
        <div>
          <h2 className="text-center">Tributación</h2>
          <br />
        </div>
        <div className="section4-2 d-flex justify-content-evenly">
          <div className="section4-a py-5">
            <p className="text-left">
              Los impuestos o tributos son un pago sin contraprestación pero
              generalmente esperamos algún beneficio indirecto. En la mayoría de
              los países modernos, los ciudadanos pagan impuestos al gobierno
              con el fin de financiar sus actividades, programas de ayuda y
              otros servicios. Tenemos una sección informativa para que
              encuentres todo lo que necesitas saber sobre impuestos.
            </p>
          </div>
          <div className="section4-b d-flex justify-content-center align-items-center">
            <img
              className="img-section4"
              src="/assets/img/money-bag.png"
              alt="tributacion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
