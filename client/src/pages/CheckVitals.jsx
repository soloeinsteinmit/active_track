import React, { useState } from "react";
import TopContent from "../components/TopContent";
import heart_img from "../assets/heart_gif.gif";
import temp from "../assets/temp.webp";
import { Image, Tooltip } from "@nextui-org/react";
import { HeartSensorReading } from "../components/SensorComponent";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbTemperaturePlus } from "react-icons/tb";
import CustomLineChart from "./Partials/LineChart";
import TemperatureChart from "./Partials/TemperatureChart";
import PersonalDetails from "./Partials/PersonalDetails";
import axios from "axios";

const data = [
  { name: "Mon", SPO2: 95, "Heart Rate": 75 },
  { name: "Tues", SPO2: 96, "Heart Rate": 77 },
  { name: "Wednes", SPO2: 97, "Heart Rate": 76 },
  { name: "Thurs", SPO2: 95, "Heart Rate": 78 },
  { name: "Fri", SPO2: 96, "Heart Rate": 74 },
  { name: "Satur", SPO2: 98, "Heart Rate": 79 },
  { name: "Sun", SPO2: 97, "Heart Rate": 77 },
];

const lines = [
  { dataKey: "SPO2", color: "#4d79ff" },
  { dataKey: "Heart Rate", color: "#ff4d4d" },
];

const tempData = [
  { name: "Sun", Tempertature: 70 },
  { name: "Mon", Tempertature: 90 },
  { name: "Tue", Tempertature: 40 },
  { name: "Wed", Tempertature: 60 },
  { name: "Thur", Tempertature: 50 },
  { name: "Fri", Tempertature: 30 },
  { name: "Sat", Tempertature: 80 },
];

// To display both exercise and rest bars
const tempBars = [
  // { dataKey: "exercise", color: "#ff4d4d" },
  { dataKey: "Tempertature", color: "#4d79ff" },
];

const CheckVitals = () => {
  const [sensorData, setSensorData] = useState({
    heartRate: "---",
    spo2: "---",
    temperature: "---",
  });
  const [loading, setLoading] = useState(true);

  const handleImageClick = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/vitals"); // Replace with your Flask endpoint

      setSensorData(response.data);

      // Handle the received data as needed
    } catch (error) {
      console.error("Error fetching vitals:", error);
    }
  };

  console.log(sensorData);
  return (
    <div className="max-w-[1000px] w-full mx-auto my-5 flex flex-col gap-5">
      <TopContent />

      <div className="flex gap-5">
        <div className="flex gap-5">
          <div className="flex flex-col items-center gap-5 w-[200px]">
            <Tooltip
              // color="foreground"
              showArrow
              placement="right"
              content={
                <div className="px-1 py-">
                  <div className="text-small font-bold">Check Vitals</div>
                  <div className="text-tiny">
                    Press to check your Heart Rate & SPO2
                  </div>
                </div>
              }
            >
              <Image
                isZoomed
                src={heart_img}
                alt=""
                className=""
                onClick={handleImageClick}
              />
            </Tooltip>
            <HeartSensorReading
              sensorReading={sensorData.heartRate}
              sensorMeasurement="BPM"
              sensorName="Heart Beat"
              subtitle="lorem ipsum dolor"
              // sensorReading={sensorData.heartRate}
            />
            <HeartSensorReading
              icon={<MdOutlineBloodtype />}
              // addImage={true}
              sensorReading={sensorData.spo2}
              // sensorReading={data.spo2}
              sensorMeasurement="%"
              sensorName="SPo2"
              subtitle="lorem ipsum dolor"
            />
          </div>
          <div className="flex flex-col items-center gap-5 w-[200px]">
            <Tooltip
              // color="foreground"
              showArrow
              placement="right"
              content={
                <div className="px-1 py-2">
                  <div className="text-small font-bold">Check Vitals</div>
                  <div className="text-tiny">
                    Press to check your Temperature
                  </div>
                </div>
              }
            >
              <Image isZoomed src={temp} alt="" className="" />
            </Tooltip>
            <HeartSensorReading
              icon={<TbTemperaturePlus />}
              sensorReading={sensorData.temperature}
              sensorMeasurement="°C"
              sensorName="Temperature"
              subtitle="lorem ipsum dolor"
            />
            <PersonalDetails />
          </div>
        </div>
        {/* ------------------------------------------------------------- */}
        <div className="flex flex-col justify-between w-full gap-5">
          <div className="w-full">
            <div className="flex flex-col">
              <p className="text-center mb-2 text-xl font-bold">
                Heart Rate & SPO2 over the week
              </p>
              <CustomLineChart data={data} lines={lines} />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col">
              <p className="text-center mb-2 text-xl font-bold">
                Temperature Measurement over the week
              </p>

              <TemperatureChart data={tempData} bars={tempBars} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckVitals;

// <a href="https://www.freepik.com/free-vector/heartbeat-with-heart-rate-graph_27288435.htm#query=heart%20rate%20graph&position=0&from_view=keyword&track=ais_hybrid&uuid=15e7198d-2b81-4f9a-bddb-32cbdf93242f">Image by brgfx on Freepik</a>
// brgfx
