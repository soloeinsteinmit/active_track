import React from "react";
import LeftNav from "../pages/Partials/LeftNav";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const OutletContainer = () => {
  return (
    <div className="flex h-dvh">
      <LeftNav />
      <Outlet />
    </div>
  );
};

export default OutletContainer;
