import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NARUTO_API from "../utils/narutoAPI";
const filtros = [
  {
    label: "Clanes",
    url: "clans",
  },
  {
    label: "Personajes",
    url: "characters",
  },
  {
    label: "Aldeas",
    url: "villages",
  },
  {
    label: "Organizaciones",
    url: "organizations",
  },
];
const Favoritos = () => {
  const [filterSelected, setFilterSelected] = useState(filtros[1]);

  const [datos, setDatos] = useState([]);

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    NARUTO_API.get("naruto/characters/favorites/", {
      headers: { Authorization: "token " + localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setDatos(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [filterSelected]);
  //   useEffect(() => {
  //     NARUTO_API.get(`naruto/${filterSelected.url}/`).then((res) => {
  //       console.log(res);
  //       setDatos(res.data.results);
  //     });
  //   }, [filterSelected]);

  return (
    <div
      id="card_container"
      className="m-2 row gx-3 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
    >
      {!localStorage.getItem("token") && (
        <h1 className="container text-center  h1-tilin">
          Registrate o Inicia Sesion para ver tus Favoritos
        </h1>
      )}

      {datos.map((dato) => {
        return (
          <div
            key={dato.pk}
            className="col mb-5 "
            id="card_template tamaño-carta"
          >
            <div className="card fixed-height ">
              <img
                className="card-img-top comic_img tamaño-imagen"
                src={dato.image_url}
                alt="..."
              />
              <div className="card-body text-center  compresion">
                <h5 className="fw-bolder comic_name">{dato.name}</h5>
                <div className="d-flex justify-content-center text-warning small">
                  <span className="px-2 text-dark">{dato.rank}</span>
                </div>

                <span className="text-muted comic_ori_price ">
                  {dato.description}
                </span>
                <span className="comic_price">{dato.village}</span>
                <span className="comic_price">{dato.clan}</span>
              </div>

              <div className="card-footer pb-4 border-top-0 bg-transparent">
                <div className="text-center">
                  <Link to={"/personaje/" + dato.pk}>
                    <button className="btn btn-outline-dark comic_button">
                      Detalles
                    </button>
                  </Link>
                </div>
              </div>
              {localStorage.getItem("token") && (
                <i className="bi bi-bookmark-star-fill icono-favorito " />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Favoritos;
