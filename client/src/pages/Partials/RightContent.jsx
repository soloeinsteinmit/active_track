import React from "react";
import UserProfile from "../../components/UserProfile";

const RightContent = () => {
  return (
    <div className="shadow-small rounded-medium  min-w-72 p-5 flex flex-col">
      <div className="flex items-start justify-center">
        <UserProfile />
      </div>
    </div>
  );
};

export default RightContent;
