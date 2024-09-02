import React from "react";
import LeftNav from "../components/LeftNav";
import { Outlet } from "react-router";

const OutletContainer = () => {
  return (
    <div className="flex">
      <LeftNav />
      <Outlet />
    </div>
  );
};

export default OutletContainer;
