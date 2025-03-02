import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-16 bg-yellow-300 flex items-center">
      <div className="w-2/12"></div>
      <div className="w-10/12 flex items-center justify-between mx-10">
        <div>
          <input type="search" placeholder="Search" className="border p-2 border-white rounded-lg"/>
        </div>
        <div className="text-2xl">
        <IoMdNotifications />
        </div>
      </div>
    </div>
  );
};

export default Header;
