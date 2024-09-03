import React from "react";
import LeftNav from "../pages/Partials/LeftNav";
import { Outlet } from "react-router-dom";

const OutletContainer = () => {
  return (
    <div className="flex w-full h-dvh gap-1">
      <LeftNav />
      <Outlet />
    </div>
  );
};

export default OutletContainer;
