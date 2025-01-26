import React from "react";

interface PropsType {
  value: number;
}

function ProgressBar(props: PropsType) {
  const value = props.value;

  function getBackgroundColor(value: number) {
    if (value === 80) return "bg-blue-500";
    if (value === 60) return "bg-orange-500";
    if (value === 24) return "bg-red-500";
    if (value === 96) return "bg-green-500";
    return "bg-gray-500";
  }

  function getFullBackgroundColor(value: number) {
    if (value === 80) return "bg-blue-100";
    if (value === 60) return "bg-orange-100";
    if (value === 24) return "bg-red-100";
    if (value === 96) return "bg-green-100";
    return "bg-gray-100"; 
  }

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div
        className={`flex-1 h-3 rounded-full ${getFullBackgroundColor(
          value
        )} overflow-hidden`}>
        <div
          className={`h-full rounded-full ${getBackgroundColor(
            value
          )} transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="text-sm md:text-base">{value}%</p>
    </div>
  );
}

export default ProgressBar;
