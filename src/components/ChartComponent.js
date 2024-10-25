import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dữ liệu mẫu
const data = [
  { name: "Tier 1", value: 10 },
  { name: "Tier 2", value: 20 },
  { name: "Tier 3", value: 30 },
  { name: "Tier 4", value: 40 },
  { name: "Tier 5", value: 50 },
  { name: "Tier 6", value: 60 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">F0 (Rebate): 5%</p>
        <p>F1 (Commission): 35%</p>
        <p>F2 (Commission): 10%</p>
      </div>
    );
  }
  return null;
};

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="url(#colorUv)"
          strokeWidth={3}
          dot={{ r: 6 }}
          activeDot={{ r: 8 }}
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ABECA2" />
            <stop offset="30%" stopColor="#2FB3FE" />
            <stop offset="65%" stopColor="#6A8EEA" />
            <stop offset="100%" stopColor="#A185F4" />
          </linearGradient>
        </defs>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
