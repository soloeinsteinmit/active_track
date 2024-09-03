import { Button } from "@nextui-org/react";
import React from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { HiCalendarDays } from "react-icons/hi2";

const LeftNav = () => {
  return (
    <div className=" w-16 bg-primary flex flex-col gap-10 items-center py-5">
      <div className="text-primary text-lg font-extrabold bg-white p-2 rounded-medium w-10 h-10 flex items-center justify-center ">
        <span className="pt-1">Fit</span>
      </div>
      // TODO: OPTIMIZE BUTTON CODE
      <div className="flex flex-col gap-3 ">
        <Button
          isIconOnly
          color="warning"
          className="text-white text-lg"
          variant="light"
          aria-label="Dashboard icon"
        >
          <TbLayoutDashboardFilled />
        </Button>
        <Button
          isIconOnly
          color="warning"
          className="text-white text-lg"
          variant="light"
          aria-label="Dashboard icon"
        >
          <BsFillBarChartLineFill />
        </Button>
        <Button
          isIconOnly
          color="warning"
          className="text-white text-lg"
          variant="light"
          aria-label="Dashboard icon"
        >
          <HiCalendarDays />
        </Button>
        <Button
          isIconOnly
          color="warning"
          className="text-white text-lg"
          variant="light"
          aria-label="Dashboard icon"
        >
          <IoSettings />
        </Button>
      </div>
    </div>
  );
};

export default LeftNav;
