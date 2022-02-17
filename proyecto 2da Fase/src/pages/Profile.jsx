import React, { useEffect, useState } from "react";
import seguridadAPI from "../utils/seguridadAPI";
const id = sessionStorage.getItem("id");
const Profile = () => {
  const [perfil, setPerfil] = useState([]);
  const getPrueba = () => {
    seguridadAPI
      .get(`ListarUsuarios?tipo=1&usuario=${id}`)
      .then((res) => console.log(res));
  };
  useEffect(() => {
    seguridadAPI.get(`ListarUsuarios?tipo=1&usuario=${id}`).then((res) => {
      console.log(res);
      setPerfil(res.data);
    });
  }, [setPerfil]);
  console.log(perfil);
  return (
    <div className="perfil m-0 p-0">
      <div className="px-5 py-2 d-flex">
        <div className="d-flex align-items-center ">
          <h4 className="m-0">Atras</h4>
          <i className="bi bi-chevron-double-right iconos-perfil text-info"></i>
        </div>
        <div className="d-flex align-items-center mx-3">
          <h4 className="m-0">Mi Perfil</h4>
          <i className="bi bi-chevron-double-right iconos-perfil text-info"></i>
        </div>
      </div>
      <div className="px-5 py-2 color-base text-light">
        <h1>Mi informacion</h1>
      </div>
      {perfil.map((filtro, index) => {
        return (
          <div key={filtro.index}>
            <div className="d-flex align-items-center">
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Nombres y Apellidos:</p>
                <p className="m-0 mx-3 color-datos">{filtro.Nombre}</p>
              </div>
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Edad:</p>
                <p className="m-0 mx-3 color-datos">{filtro.Edad}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Profesion:</p>
                <p className="m-0 mx-3 color-datos">{filtro.Profesion}</p>
              </div>
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Estudios:</p>
                <p className="m-0 mx-3 color-datos">Universitarios</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Telefono:</p>
                <p className="m-0 mx-3 color-datos">{filtro.Telefono}</p>
              </div>
              <div className="w-50 px-5 py-3 d-flex">
                <p className="m-0 mx-2">Email:</p>
                <p className="m-0 mx-3 color-datos">{filtro.Email}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className="px-5 py-2 color-base text-light">
        <h1>Mis Trabajos</h1>
      </div>
      <div className="px-5 py-5 w-50 ">
        <button
          className="color-base w-50 boton-trabajos text-light"
          onClick={getPrueba}
        >
          Agregar Trabajo
        </button>
      </div>
      {/* <div className="div-prueba"></div> */}
    </div>
  );
};

export default Profile;
