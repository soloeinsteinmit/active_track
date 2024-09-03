import React from "react";
import LeftNav from "../components/LeftNav";
import { Outlet } from "react-router-dom";

const OutletContainer = () => {
  return (
    <div className="flex w-full h-dvh">
      <LeftNav />
      <Outlet />
    </div>
  );
};

export default OutletContainer;
