import { Button, Tooltip } from "@nextui-org/react";
import React from "react";
import { TbLayoutDashboardFilled, TbLogout2 } from "react-icons/tb";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { TbHealthRecognition } from "react-icons/tb";
import NavLinkCard from "../../components/NavLinkCard";
import { IoLogOut } from "react-icons/io5";
import { clearMessages } from "../../features/ai/messageSlice";
import { clearAIMessages } from "../../features/ai/AiSlice";
import { NavLink } from "react-router-dom";
import { logoutUser } from "../../features/ai/userSlice";

const LeftNav = () => {
  const links = [
    {
      label: "Dashboard",
      icon: <TbLayoutDashboardFilled />,
      to: "/dashboard",
    },
    {
      label: "Previous Data",
      icon: <BsFillBarChartLineFill />,
      to: "/dashboard/data",
    },
    {
      label: "Check Vitals",
      icon: <TbHealthRecognition className="text-2xl" />,
      to: "/dashboard/check_vitals",
    },
    {
      label: "FitFlow AI",
      icon: <FaRobot className="text-2xl" />,
      to: "/dashboard/ai_conversation",
    },
    // {
    //   label: "Settings",
    //   icon: <IoSettings />,
    //   to: "/settings",
    // },
  ];

  const handleLogout = async () => {
    await dispatch(clearMessages());
    await dispatch(clearAIMessages());
    await dispatch(logoutUser());
    // Clear localStorage
    localStorage.clear();
  };

  return (
    <div className="w-16 bg-primary flex flex-col justify-between gap-10 items-center py-5">
      <div className="flex flex-col gap-10">
        <div className="text-primary text-lg font-extrabold bg-white p-2 rounded-medium w-10 h-10 flex items-center justify-center">
          <span className="pt-1">Fit</span>
        </div>
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

      {/* <NavLinkCard
        onClick={handleLogout}
        icon={<IoLogOut className="text-2xl" />}
        to="/login"
        tooltip="Logout"
      /> */}
      <NavLink to={"/login"}>
        <Tooltip showArrow={true} content="Log Out">
          <Button
            isIconOnly
            color="primary"
            variant="light"
            aria-label="send"
            onClick={handleLogout}
          >
            <IoLogOut className="text-xl" />
          </Button>
        </Tooltip>
      </NavLink>

      {/* <NavLink to={"/login"}>
        <Tooltip showArrow={true} content="Log Out">
          <Button
            isIconOnly
            variant="light"
            aria-label="send"
            onClick={handleLogout}
          >
            <IoLogOut className="text-2xl text-white" />
          </Button>
        </Tooltip>
      </NavLink> */}
    </div>
  );
};

export default LeftNav;
