import React from "react";
import { NavLink } from "react-router-dom";
import "../css/nav_links.css";
import { Tooltip } from "@nextui-org/react";

function NavLinkCard({ icon, tooltip = "Name here...", to = "/" }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Tooltip color="foreground" content={tooltip} placement="right">
      <NavLink
        to={to}
        className="flex gap-2 items-center justify-start link-wrapper"
        onClick={handleClick}
      >
        <div className="rounded-small text-white text-lg h-10 w-10 flex items-center justify-center icon-container">
          {icon}
        </div>
      </NavLink>
    </Tooltip>
  );
}

export default NavLinkCard;
