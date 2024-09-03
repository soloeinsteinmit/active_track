import React from "react";
import { PiThermometer } from "react-icons/pi";

const WeatherProperties = ({
  icon = <PiThermometer />,
  weatherValue = "19 C",
  weatherType = "Lorem",
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-xl text-primary">{icon}</div>
      <span className="font-bold text-sm">{weatherValue}</span>
      <span className="text-xs font-semibold text-default-500">
        {weatherType}
      </span>
    </div>
  );
};

export default WeatherProperties;
