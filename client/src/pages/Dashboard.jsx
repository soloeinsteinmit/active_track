import React from "react";
import TopContent from "../components/TopContent";
import FitnessCard from "../components/FitnessCard";
import WeatherCard from "../components/WeatherCard";
import MapView from "../components/MapView";
import RightContent from "./Partials/RightContent";
import ActivityChart from "../components/ActivityChart";

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
          <ActivityChart />
          <WeatherCard />
        </div>
        <MapView />
      </div>

      <RightContent />
    </div>
  );
};

export default Dashboard;
