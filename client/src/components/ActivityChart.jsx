import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sun",
    exercise: 50, // derived from pv
    rest: 70, // derived from uv
  },
  {
    name: "Mon",
    exercise: 30,
    rest: 90,
  },
  {
    name: "Tue",
    exercise: 80,
    rest: 40,
  },
  {
    name: "Wed",
    exercise: 60,
    rest: 60,
  },
  {
    name: "Thur",
    exercise: 70,
    rest: 50,
  },
  {
    name: "Fri",
    exercise: 90,
    rest: 30,
  },
  {
    name: "Sat",
    exercise: 40,
    rest: 80,
  },
];

const ActivityChart = () => {
  return (
    <div className="flex flex-col shadow-small h-52 w-96 rounded-medium p-5">
      <span className="text-sm font-bold">Activity</span>
      <Chart />
    </div>
  );
};

export default ActivityChart;

import React from "react";

// Custom bar shape with rounded corners
const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 10; // Adjust this to control the roundness

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius} // Horizontal radius for rounded corners
      ry={radius} // Vertical radius for rounded corners
    />
  );
};

class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/stacked-bar-chart-7fwfgj";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={"100%"}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={10} // Adjust bar width
          barGap={5} // Adjust the gap between bars
          barCategoryGap="20%" // Adjust the gap between categories
          className=""
        >
          {/* Removed CartesianGrid to eliminate the background grid */}
          <XAxis dataKey="name" style={{ fontSize: "12px" }} />
          {/* Smaller font size */}
          <YAxis style={{ fontSize: "12px" }} /> {/* Smaller font size */}
          <Tooltip wrapperClassName="text-small" />
          <Legend
            wrapperStyle={{ fontSize: "12px", marginBottom: "5px" }}
            verticalAlign="top"
            align="right"
          />
          {/* Smaller font size */}
          <Bar dataKey="exercise" stackId="a" fill="#ff4d4d" />
          <Bar dataKey="rest" stackId="a" fill="#4d79ff" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
