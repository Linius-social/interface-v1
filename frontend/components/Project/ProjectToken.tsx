"use client";

import { PieChart, Pie, Cell } from "recharts";
import { Clock } from "lucide-react";
import React from "react";

const data = [
  { name: "Field 1", value: 25 },
  { name: "Field 2", value: 25 },
  { name: "Field 3", value: 25 },
  { name: "Field 4", value: 25 },
];

const COLORS = ["#FFA07A", "#FF7F50", "#FF6347", "#FF4500"];

const ProjectToken = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className=" p-6 font-sans">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-bold mr-2">Token</h2>
        <Clock className="text-orange-500" size={24} />
      </div>
      <p className="text-sm mb-4">Token Info</p>

      <div className="rounded-lg p-3 mb-6 flex items-center">
        <div className="bg-orange-500 rounded p-1 mr-2">
          <svg
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-gray-300">0x123...345b</span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div>
          <p className="text-gray-400 text-sm">Name</p>
          <p className="font-bold">Coin</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Symbol</p>
          <p className="font-bold">POL</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Supply</p>
          <p className="font-bold">30 SOL</p>
        </div>
      </div>

      <div>
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold mr-2">Tokenomic</h3>
          <svg
            className="h-5 w-5 text-orange-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Follow tokenomic info by chart
        </p>

        <div className="relative">
          <PieChart height={200} width={200}>
            <Pie
              cx={100}
              cy={100}
              data={data}
              dataKey="value"
              fill="#8884d8"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <p className="text-sm text-gray-400">Title</p>
            <p className="text-xl font-bold">$0000</p>
          </div>
        </div>

        <div className="mt-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center mt-2">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span>Field {index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectToken;
