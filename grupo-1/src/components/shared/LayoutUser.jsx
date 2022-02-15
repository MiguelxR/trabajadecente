import React from "react";
import { Outlet } from "react-router-dom";
import FooterUser from "./FooterUser";
import NavbarUser from "./NavbarUser";
import Sidebar from "./Sidebar";

const LayoutUser = () => {
  return (
    <div className="div-layout-user">
      <Sidebar></Sidebar>

      <NavbarUser></NavbarUser>

      <Outlet></Outlet>

      <FooterUser></FooterUser>
    </div>
  );
};

export default LayoutUser;
