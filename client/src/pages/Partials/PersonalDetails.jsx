import { Divider } from "@nextui-org/react";
import React from "react";
import { useSelector } from "react-redux";

const PersonalDetails = ({ height = "100px" }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const heightInMeters = userInfo.height / 100;
  const bmi = userInfo.weight / (heightInMeters * heightInMeters);
  return (
    <div className="shadow-medium rounded-medium  flex-col gap-1 w-full py-5">
      <p className="font-bold mb-2 px-5">Personal Details</p>
      <div className="flex flex-col gap-2 ">
        <PersonalDataCard data="Age" value={userInfo.age} />
        <Divider />
        <PersonalDataCard data="Height" value={`${userInfo.height} cm`} />
        <Divider />
        <PersonalDataCard data="Weight" value={`${userInfo.weight} kg`} />

        <Divider />
        <PersonalDataCard data="BMI" value={`${bmi.toFixed(1)}`} />
      </div>
    </div>
  );
};

export default PersonalDetails;

function PersonalDataCard({ data = "Lorem", value = "100px" }) {
  return (
    <p className="text-tiny flex justify-between mx-5">
      <span>{data}</span> <span> {value}</span>
    </p>
  );
}
