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
import { CustomTooltip } from "../../components/ActivityChart";

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
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={10} // Adjust bar width
          barGap={5} // Adjust the gap between bars
          barCategoryGap="20%" // Adjust the gap between categories
        >
          <XAxis dataKey="name" />
          <YAxis width={30} />
          <Tooltip wrapperClassName="text-small" content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ fontSize: "12px", marginBottom: "5px" }}
            verticalAlign="top"
            align="right"
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

const TemperatureChart = ({ data, bars }) => {
  return (
    <div className="h-[250px]">
      <Chart data={data} bars={bars} />
    </div>
  );
};

export default TemperatureChart;
