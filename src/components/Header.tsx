import Image from "next/image";
import React from "react";
import profilePic from "../../public/JPEGs/profile.jpg";


function Header() {
  return (
    // <nav className="h-[calc(100vh-95vh)]">
    <nav className="py-[4vh] px-5 border-b-[1px] w-[100%]">
      <header className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-1">
          <div>
            <Image
              src="/JPEGs/logo.jpg"
              width={30}
              height={20}
              alt="company-logo"
            />
          </div>
          <h1 className="font-bold text-[18px]">WhatBytes</h1>
        </div>
        <div className="flex justify-between items-center border-2 border-gray-200 py-1 px-1 rounded-md gap-1">
          <div className="">
            <Image src={profilePic} alt="profile-pic" style={{ width: '30px', height: '30px', borderRadius: '50%', overflow: 'hidden' }}/>
          </div>
          <p className="text-[12px] font-bold">Rahil Siddique</p>
        </div>
      </header>
    </nav>
  );
}

export default Header;
