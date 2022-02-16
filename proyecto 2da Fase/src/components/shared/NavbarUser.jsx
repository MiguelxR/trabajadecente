import React from "react";

const NavbarUser = () => {
  return (
    <div>
      <div className="nav-user d-flex align-items-center justify-content-between px-5">
        <div className="py-3 d-flex flex-column justify-content-evenly ">
          <h1 className="m-0">Mi Perfil</h1>
          <div className="d-flex">
            <p className="m-0">usuario:</p>
            <strong className="mx-2">Jhon Doe</strong>
          </div>
        </div>
        <div className="w-25 h-100 d-flex justify-content-center align-items-center">
          <img
            className="w-100 h-100"
            src="/assets/img/perfil.svg"
            alt="Cargando..."
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarUser;
