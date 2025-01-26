import React from "react";
import { TbCertificate2 } from "react-icons/tb";
import { CiFileOn } from "react-icons/ci";

import { MdDashboard } from "react-icons/md";

function SideBar() {
  return (
    <div className=" fixed border-r-[1px] pr-2 pt- w-[13%] h-full text-[14px] pt-[7vh]">
      <div className="flex items-center justify-center py-3 md:justify-start  cursor-pointer hover:bg-gray-200 rounded-r-full gap-3 px-3">
        <MdDashboard className="md:hidden lg:block sm:text-[20px]"/>
        <p className="hover:text-blue-500 font-bold text-gray-500 hidden md:block">Dashboard</p>
      </div>
      <div className="flex items-center justify-center py-3 md:justify-start  cursor-pointer hover:bg-gray-200 rounded-r-full gap-3 px-3">
      <TbCertificate2 className="md:hidden lg:block sm:text-[20px]"/>
      <p className="hover:text-blue-500 font-bold text-gray-500 hidden md:block">Skill Test</p>
      </div>
      <div className="flex items-center justify-center py-3 md:justify-start  cursor-pointer hover:bg-gray-200 rounded-r-full gap-3 px-3">
        <CiFileOn className="md:hidden lg:block sm:text-[20px]"/>
        <p className="hover:text-blue-500 font-bold text-gray-500 hidden md:block">Internship</p>
      </div>
    </div>
  );
}

export default SideBar;
