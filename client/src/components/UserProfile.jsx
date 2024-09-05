import { Avatar, Chip } from "@nextui-org/react";
import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col gap-2 w-full items-center justify-center">
      <Avatar
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-20 h-20 text-large"
        // isBordered
        radius="sm"
        showFallback
        name="Jane"
        color="primary"
      />
      <p className="flex flex-col items-center">
        <span className="text-lg font-bold text-primary-800">{user.name}</span>
        <span className="text-sm font-semibold text-primary-300">
          {user.email}
        </span>
      </p>
      <div className="flex w-full justify-evenly">
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-xs font-bold">Height</span>
          <div className="flex items-center justify-center bg-primary w-16 rounded-small text-sm text-white py-1">
            {user.height}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-xs font-bold">Weight</span>
          <div className="flex items-center justify-center bg-primary w-16 rounded-small text-sm text-white py-1">
            {user.weight}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <span className="text-xs font-bold">Age</span>
          <div className="flex items-center justify-center bg-primary w-16 rounded-small text-sm text-white py-1">
            {user.age}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
