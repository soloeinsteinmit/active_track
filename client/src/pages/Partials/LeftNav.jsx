import { Button } from "@nextui-org/react";
import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";
import NavLinkCard from "../../components/NavLinkCard";

const LeftNav = () => {
  return (
    <div className=" w-16 bg-primary flex flex-col gap-10 items-center py-5">
      <div className="text-primary text-lg font-extrabold bg-white p-2 rounded-medium w-10 h-10 flex items-center justify-center ">
        <span className="pt-1">Fit</span>
      </div>
      {/*// TODO: OPTIMIZE BUTTON CODE */}
      <div className="flex flex-col gap-8">
        <NavLinkCard
          icon={<TbLayoutDashboardFilled />}
          to="/"
          tooltip="Dashboard"
        />
        <NavLinkCard
          icon={<BsFillBarChartLineFill />}
          to="/data"
          tooltip="Previous Data"
        />
        <NavLinkCard
          icon={<TbHealthRecognition className="text-xl" />}
          to="/check_vitals"
          tooltip="Check Vitals"
        />
        <NavLinkCard icon={<FaRobot />} to="/3" tooltip="FitFlow AI" />
        {/* <NavLinkCard icon={<IoSettings />} to="/2" /> */}
      </div>
    </div>
  );
};

export default LeftNav;
