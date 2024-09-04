import React from "react";
import TopContent from "../components/TopContent";
import FitnessCard from "../components/FitnessCard";
import WeatherCard from "../components/WeatherCard";
import MapView from "../components/MapView";
import RightContent from "./Partials/RightContent";
import ActivityChart from "../components/ActivityChart";

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
const Dashboard = () => {
  return (
    <div className="flex justify-between gap-5 w-full max-w-[1100px] mx-auto py-5 ">
      <div className="w-full flex flex-col gap-5">
        <TopContent />
        <div className="flex justify-between">
          <FitnessCard />
          <FitnessCard />
          <FitnessCard />
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
