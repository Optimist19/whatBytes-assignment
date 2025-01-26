"use client";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Blue Slice", value: 90 },
  { name: "Red Slice", value: 10 },
];

export default function ChartPie() {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm aspect-square">
      <PieChart width={400} height={400} className="w-full h-full">
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius="30%"
          outerRadius="40%"
          startAngle={-30}
          endAngle={450}
        >
          <Cell fill="#3b82f6" />
          <Cell fill="#dbeafe" />
        </Pie>
      </PieChart>

      <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl lg:text-4xl">
        🎯
      </div>
    </div>
  );
}
