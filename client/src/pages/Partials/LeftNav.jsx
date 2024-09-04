import { Button } from "@nextui-org/react";
import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";
import NavLinkCard from "../../components/NavLinkCard";
import { IoLogOut } from "react-icons/io5";

const LeftNav = () => {
  const links = [
    {
      label: "Dashboard",
      icon: <TbLayoutDashboardFilled />,
      to: "/",
    },
    {
      label: "Previous Data",
      icon: <BsFillBarChartLineFill />,
      to: "/data",
    },
    {
      label: "Check Vitals",
      icon: <TbHealthRecognition className="text-2xl" />,
      to: "/check_vitals",
    },
    {
      label: "FitFlow AI",
      icon: <FaRobot className="text-2xl" />,
      to: "/3",
    },
    // {
    //   label: "Settings",
    //   icon: <IoSettings />,
    //   to: "/4",
    // },
  ];
  return (
    <div className=" w-16 bg-primary flex flex-col justify-between gap-10 items-center py-5">
      <div className="flex flex-col gap-10">
        <div className="text-primary text-lg font-extrabold bg-white p-2 rounded-medium w-10 h-10 flex items-center justify-center ">
          <span className="pt-1">Fit</span>
        </div>
        {/*// TODO: OPTIMIZE BUTTON CODE */}
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <NavLinkCard
              key={link.label}
              tooltip={link.label}
              icon={link.icon}
              to={link.to}
            />
          ))}
        </div>
      </div>

      <NavLinkCard
        icon={<IoLogOut className="text-2xl" />}
        to="/logout"
        tooltip="Logout"
      />
    </div>
  );
};

export default LeftNav;
