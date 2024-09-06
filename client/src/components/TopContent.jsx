import React from "react";
import ThemeSwitch from "./ThemeSwitcher";
import { HiCalendarDays } from "react-icons/hi2";
import { useSelector } from "react-redux";

const TopContent = () => {
  const userInfo = useSelector((state) => state.user.userInfo);

  const date = new Date();
  const todayDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log("user ->", userInfo);
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col">
        <p className="text-2xl font-bold">
          Hello, {userInfo.name.split(" ")[0]}
        </p>
        <span className="text-small text-default-500 font-semibold">
          Lorem ipsum, dolor sit amet
        </span>
      </div>
      <div className="flex gap-10 items-start">
        <div className="text-primary border-primary rounded-large text-small border flex items-center justify-center px-3 py-2 gap-1">
          <p className="font-semibold">{todayDate}</p>{" "}
          <HiCalendarDays className="text-large mb-1" />
        </div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default TopContent;
