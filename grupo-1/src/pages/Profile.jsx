import React from "react";

const Profile = () => {
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
      <div className="d-flex align-items-center">
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Nombres y Apellidos:</p>
        </div>
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Edad:</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Profesion:</p>
        </div>
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Estudios:</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Telefono:</p>
        </div>
        <div className="w-50 px-5 py-3 d-flex">
          <p className="m-0 mx-2">Email:</p>
        </div>
      </div>
      <div className="px-5 py-2 color-base text-light">
        <h1>Mis Trabajos</h1>
      </div>
      <div className="px-5 py-5 w-50 ">
        <button className="color-base w-50 boton-trabajos text-light">
          Agregar Trabajo
        </button>
      </div>
      {/* <div className="div-prueba"></div> */}
    </div>
  );
};

export default Profile;
