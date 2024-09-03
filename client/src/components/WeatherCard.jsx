import React from "react";
import {
  PiCloudFill,
  PiCloudFog,
  PiDropBold,
  PiMapPinAreaBold,
  PiMapPinAreaFill,
  PiRainbowBold,
  PiWindBold,
} from "react-icons/pi";
import WeatherProperties from "./WeatherProperties";

const WeatherCard = ({ location = "Location" }) => {
  return (
    <div className="shadow-small h-52 w-96 rounded-medium p-5 flex flex-col justify-between">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-bold">Weather</span>
          <div className="flex gap-1">
            {/* <PiMapPinAreaBold className="text-2xl text-primary" /> */}
            <PiMapPinAreaFill className="text-2xl text-primary" />
            <p className="font-bold text-primary text-large">{location}</p>
          </div>
        </div>
        <div className="bg-primary p-3 flex items-center justify-center rounded-medium">
          {/* icon */}
          <PiCloudFill className="text-white text-6xl" />
        </div>
      </div>

      {/* weather features */}
      <div className="flex justify-between">
        <WeatherProperties
          icon={<PiWindBold />}
          weatherType="Wind"
          weatherValue="10 km/h"
        />
        <WeatherProperties icon={<PiDropBold />} />
        <WeatherProperties />
        <WeatherProperties />
        <WeatherProperties />
      </div>
    </div>
  );
};

export default WeatherCard;
