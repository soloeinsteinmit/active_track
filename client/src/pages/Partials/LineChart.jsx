import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
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
class CustomLineChart extends PureComponent {
  render() {
    const { data, lines, height = 250 } = this.props;

    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis width={30} domain={[60, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ fontSize: "12px", marginBottom: "5px" }}
          />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              activeDot={{ r: 8 }}
              strokeWidth={3}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default CustomLineChart;
