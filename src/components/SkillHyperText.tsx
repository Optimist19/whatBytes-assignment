"use client";

import React from "react";
import Image from "next/image";
import htmlLogo from "../../public/JPEGs/htmllogo.png";
import { useGlobalState } from "@/store/Store";

function SkillHyperText() {
  const { openModal } = useGlobalState();

  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center border border-gray-200 py-6 px-4 rounded-md">
      <div className="flex-shrink-0">
        <Image src={htmlLogo} alt="html-logo" width={45} />
      </div>

      <div className="flex flex-col text-center lg:text-left">
        <p className="font-bold text-[15px] lg:text-base">Hyper Text Markup Language</p>
        <p className="text-gray-800 text-[13px] lg:text-sm">
          Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
        </p>
      </div>

      <div>
        <button
          className="border border-black bg-blue-950 py-[0.5rem] px-4 rounded-md text-white text-[13px] lg:text-sm font-bold hover:bg-blue-700 transition"
          onClick={() => openModal()}>
          Update
        </button>
      </div>
    </div>
  );
}

export default SkillHyperText;
