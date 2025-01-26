"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { name: "0", pv: 150 },
  { name: "25", pv: 1350 },
  { name: "50", pv: 4750 },
  { name: "75", pv: 208 },
  { name: "100", pv: 100 },
];

function Chart() {
  return (
    <div className="border border-gray-200 rounded-md h-auto lg:h-[63vh] p-4">
      <p className="font-bold py-3 text-center lg:text-left">Comparison Graph</p>
      <div className="relative text-center lg:text-left">
        <p>
          <span className="font-bold text-gray-500">
            You scored 90% percentile
          </span>{" "}
          <span className="text-gray-800">which is lower than the</span>
        </p>
        <p className="text-gray-800">
          average percentile 72% of all the engineers who took this assessment
        </p>
        <div className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-gray-200 flex justify-center items-center rounded-full absolute right-2 lg:right-0 bottom-2 lg:bottom-4">
          <p>📈</p>
        </div>
      </div>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20 }}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            >
              <LabelList position="top" offset={10} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
