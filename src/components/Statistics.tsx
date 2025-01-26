"use client";

import { useGlobalState } from "@/store/Store";
import React from "react";

function Statistics() {
  const { rate, percentile, score } = useGlobalState();

  return (
    <div className="flex justify-center">
      <div className=" flex items-center gap-3">
        <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-full hidden md:flex">
          <p>🏆</p>
        </div>
        <div className="grid gap-1 pr-4 py-3">
          <p className="font-bold text-[16px]">{rate}</p>
          <p className="text-[10px] text-gray-400 stats-title">YOUR RANK</p>
        </div>
      </div>
      <div className="pl-3 flex items-center gap-3 border-r-2 border-l-2">
        <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-full hidden md:flex">
          <p>📋</p>
        </div>
        <div className="grid gap-1 pr-4 py-3">
          <p className="font-bold text-[16px]">{percentile}%</p>
          <p className="text-[10px] text-gray-400 stats-title">PERCENTILE</p>
        </div>
      </div>
      <div>
        <div className="pl-3 flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-gray-200 flex justify-center items-center rounded-full hidden md:flex">
            <p className="text-center">✅</p>
          </div>
          <div className="grid gap-1 pr-4 py-3">
            <p className="font-bold text-[16px]">{score}/15</p>
            <p className="text-[10px] text-gray-400 stats-title">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
