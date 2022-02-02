import React from "react";
import { useState } from "react/cjs/react.development";
import NARUTO_API from "../utils/narutoAPI";

const Crud = () => {
  const [nombreClase, setNombreClase] = useState("");
  const [nombre, setNombre] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const enviar = () => {
    const body = {
      name: nombre,
      description: descripcion,
      rank: "Unknown",
      image_url: imagen,
    };
    NARUTO_API.post(`naruto/${nombreClase}/`, body, {
      headers: { Authorization: "token " + localStorage.getItem("token") },
    })
      .then((res) => {
        console.log(res);
        setNombreClase("");
        setNombre("");
        setImagen("");
        setDescripcion("");
        alert("Se ha enviado con exito el Post!!!");
      })
      .catch((error) => {
        console.log(error);
        alert("Selecciona una clase Valida!!!");
      });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        POSTEAR
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Publicacion
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="Clase-Name" className="col-form-label">
                    Clase
                  </label>
                  <select
                    className="form-control"
                    name="transporte"
                    id="Clase-Name"
                    value={nombreClase}
                    onChange={(event) =>
                      setNombreClase(event.currentTarget.value)
                    }
                  >
                    <option>Seleccione la clase:</option>
                    <option>characters</option>
                    <option>villages</option>
                    <option>clans</option>
                    <option>organizations</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={nombre}
                    onChange={(event) => setNombre(event.currentTarget.value)}
                    placeholder="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imagen" className="col-form-label">
                    URL Imagen:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imagen"
                    value={imagen}
                    onChange={(event) => setImagen(event.currentTarget.value)}
                    placeholder="Solo URLs Cortos"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="descripcion" className="col-form-label">
                    Descripcion:
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    value={descripcion}
                    onChange={(event) =>
                      setDescripcion(event.currentTarget.value)
                    }
                    placeholder="Descripcion"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={enviar}
                type="button"
                className="btn btn-outline-dark"
              >
                enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crud;
