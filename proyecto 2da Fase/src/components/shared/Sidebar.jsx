import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo py-2 px-4">
        <img className="w-100 h-100" src="/assets/img/logoSidebar.png" alt="" />
      </div>
      <ul className="w-100 m-0 p-0 text-light">
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center  ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-house-chimney iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Inicio</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-gavel iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Derecho Laboral</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-file-invoice-dollar iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Tributacion</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-calculator iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Calculadoras</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-building-columns iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">SUNAFIL</h6>
        </li>
        <li className="w-100 ops-sidebar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-user iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Perfil</h6>
        </li>
      </ul>
      <div className="cerrar-sesion w-100 m-0 p-0">
        <div className="w-100 ops-sidebar-cerrar px-3 d-flex align-items-center ">
          <div className="w-25 h-100 d-flex justify-content-center align-items-center ">
            <i className="fa-solid fa-door-open iconos-sidebar"></i>
          </div>
          <h6 className="m-0 mx-2">Cerrar Sesion</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
