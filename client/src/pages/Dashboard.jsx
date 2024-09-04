import React from "react";
import TopContent from "../components/TopContent";
import FitnessCard from "../components/FitnessCard";
import WeatherCard from "../components/WeatherCard";
import MapView from "../components/MapView";
import RightContent from "./Partials/RightContent";
import ActivityChart from "../components/ActivityChart";
import { LiaHeartbeatSolid } from "react-icons/lia";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbTemperaturePlus } from "react-icons/tb";
import { icon } from "leaflet";

const data = [
  { name: "Sun", exercise: 50, rest: 70 },
  { name: "Mon", exercise: 30, rest: 90 },
  { name: "Tue", exercise: 80, rest: 40 },
  { name: "Wed", exercise: 60, rest: 60 },
  { name: "Thur", exercise: 70, rest: 50 },
  { name: "Fri", exercise: 90, rest: 30 },
  { name: "Sat", exercise: 40, rest: 80 },
];

// To display both exercise and rest bars
const bars = [
  { dataKey: "exercise", color: "#ff4d4d" },
  { dataKey: "rest", color: "#4d79ff" },
];

const fitnessData = [
  {
    fitnessFeature: "Heart Rate",
    fitnessMeasure: "BPM",
    fitnessValue: 89,
    icon: <LiaHeartbeatSolid />,
  },
  {
    fitnessFeature: "SPO2",
    fitnessMeasure: "%",
    fitnessValue: 89,
    icon: <MdOutlineBloodtype />,
  },
  {
    fitnessFeature: "Temperature",
    fitnessMeasure: "°C",
    fitnessValue: 89,
    icon: <TbTemperaturePlus />,
  },
];
const Dashboard = () => {
  return (
    <div className="flex justify-between gap-5 w-full max-w-[1100px] mx-auto py-5 ">
      <div className="w-full flex flex-col gap-5">
        <TopContent />
        <div className="flex justify-between">
          {fitnessData.map((data, index) => (
            <FitnessCard
              key={index}
              fitnessFeature={data.fitnessFeature}
              fitnessMeasure={data.fitnessMeasure}
              fitnessValue={data.fitnessValue}
              icon={data.icon}
            />
          ))}
        </div>
        {/* graph */}
        {/* weather */}
        <div className="flex justify-between">
          <ActivityChart data={data} bars={bars} />
          <WeatherCard />
        </div>
        <MapView />
      </div>

      <RightContent />
    </div>
  );
};

export default Dashboard;
