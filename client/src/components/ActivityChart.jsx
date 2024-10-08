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

// Custom bar shape with rounded corners
const RoundedBar = (props) => {
  const { fill, x, y, width, height } = props;
  const radius = 5; // Adjust this to control the roundness
  const margin = 2;

  return (
    <rect
      x={x}
      y={y + margin}
      width={width}
      height={height - 2 * margin}
      fill={fill}
      rx={radius} // Horizontal radius for rounded corners
      ry={radius} // Vertical radius for rounded corners
    />
  );
};
export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "hsl(var(--nextui-content4))",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          className="label"
          style={{ fontWeight: "bold", fontSize: "12px" }}
        >{`${label}`}</p>
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: entry.color, margin: 0, fontSize: "12px" }}
          >{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }

  return null;
};

class Chart extends PureComponent {
  render() {
    const { data, bars, height = "100%", width = "100%" } = this.props;

    return (
      <ResponsiveContainer width={width} height={height}>
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
          barSize={8} // Adjust bar width
          barGap={5} // Adjust the gap between bars
          barCategoryGap="20%" // Adjust the gap between categories
        >
          <XAxis dataKey="name" style={{ fontSize: "12px" }} />
          <YAxis style={{ fontSize: "12px" }} width={30} />
          <Tooltip wrapperClassName="text-small" content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px", marginBottom: "5px" }}
            verticalAlign="top"
            align="right"
            iconSize={5}
          />
          {bars.map((bar, index) => (
            <Bar
              key={index}
              dataKey={bar.dataKey}
              stackId="a"
              fill={bar.color}
              shape={<RoundedBar />}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

const ActivityChart = ({ data, bars }) => {
  return (
    <div className="flex flex-col shadow-small h-52 w-96 rounded-medium p-5">
      <span className="text-sm font-bold">Activity</span>
      <Chart data={data} bars={bars} />
    </div>
  );
};

export default ActivityChart;
