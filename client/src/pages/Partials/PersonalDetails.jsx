import { Divider } from "@nextui-org/react";
import React from "react";

const PersonalDetails = ({ height = "100px" }) => {
  return (
    <div className="shadow-medium rounded-medium  flex-col gap-1 w-full py-5">
      <p className="font-bold mb-2 px-5">Personal Details</p>
      <div className="flex flex-col gap-2 ">
        <PersonalDataCard data="Age" value="23" />
        <Divider />
        <PersonalDataCard data="Height" value="190 cm" />
        <Divider />
        <PersonalDataCard data="Weight" value="80 kg" />

        <Divider />
        <PersonalDataCard data="BMI" value="25" />
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
