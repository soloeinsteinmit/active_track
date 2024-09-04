import React from "react";
import { LiaHeartbeatSolid } from "react-icons/lia";
import blood from "../assets/heart.jpg";
import { Image } from "@nextui-org/react";

export const HeartSensorReading = ({
  sensorReading = "---",
  sensorName = "Heart Beat Rate",
  subtitle = "lorem ipsum",
  sensorMeasurement = "BPM",
  image = blood,
  addImage = false,
  icon = <LiaHeartbeatSolid />,
  ...props
}) => {
  return (
    <div
      className="shadow-medium rounded-medium p-5 flex-col gap-1 w-full"
      {...props}
    >
      <div className="flex justify-start items-center gap-3">
        <div className="flex justify-center items-center bg-primary-200 text-3xl p-2 rounded-full">
          {icon}
        </div>
        <p className="font-bold text-2xl">
          {sensorReading} <span>{sensorMeasurement}</span>
        </p>
      </div>
      {addImage && (
        <div className="w-full max-h-[30px] overflow-hidden">
          <Image src={image} className="mt-1 w-full h-full object-cover" />
        </div>
      )}

      <div className="flex flex-col mt-3">
        <p className="font-bold">{sensorName}</p>
        <span className="text-tiny">{subtitle}</span>
      </div>
    </div>
  );
};
