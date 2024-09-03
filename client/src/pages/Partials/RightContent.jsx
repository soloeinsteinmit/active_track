import React from "react";
import UserProfile from "../../components/UserProfile";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../../components/CustomCheckbox";

const RightContent = () => {
  return (
    <div className="shadow-small rounded-medium  min-w-72 p-5 flex flex-col gap-5">
      <UserProfile />
      <CheckboxGroup
        label="To-do-List"
        // value={groupSelected}
        // onChange={setGroupSelected}
        classNames={{
          base: "w-full",
          label: "font-bold",
        }}
      >
        <CustomCheckbox task="Burn 234 calories" />
        <CustomCheckbox task="Maintain heart rate of 80bpm" />
        <CustomCheckbox task="Take 3333 steps" />
        <CustomCheckbox task="Take 6 hours sleep" />
      </CheckboxGroup>
    </div>
  );
};

export default RightContent;
/**
 * 
 * <CustomCheckbox
          value="junior"
          user={{
            name: "Junior Garcia",
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            url: "https://twitter.com/jrgarciadev",
            role: "Software Developer",
            status: "Active",
          }}
          statusColor="secondary"
        />
 */
