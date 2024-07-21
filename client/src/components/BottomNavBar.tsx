import React from "react";
import Friends from "../icons/Friends";
import Coins from "../icons/Coins";
import { Link } from "react-router-dom";
import Settings from "../icons/Settings";
import Hamster from "../icons/Hamster";

const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs p-2 shadow-lg">
      <Link
        to="/"
        className="text-center text-[#85827d] w-1/5  m-1 p-2 rounded-2xl hover:bg-[#1d2025] transition-colors duration-200"
      >
       <Hamster className="w-8 h-8 mx-auto"/>
        <p className="mt-1">Genrate</p>
      </Link>

      <Link
        to="/friends"
        className="text-center text-[#85827d] w-1/5 m-1 p-2  rounded-2xl hover:bg-[#1d2025] transition-colors duration-200"
      >
        <Friends className="w-8 h-8 mx-auto" />
        <p className="mt-1">Friends</p>
      </Link>

      <Link
        to="/earn"
        className="text-center text-[#85827d] w-1/5 m-1 p-2 rounded-2xl hover:bg-[#1d2025] transition-colors duration-200"
      >
        <Coins className="w-8 h-8 mx-auto" />
        <p className="mt-1">Earn</p>
      </Link>

      <Link
        to="/settings"
        className="text-center text-[#85827d] w-1/5 m-1 p-2 rounded-2xl hover:bg-[#1d2025] transition-colors duration-200"
      >
        <Settings className="w-8 h-8 mx-auto" />
        <p className="mt-1">Settings</p>
      </Link>
    </div>
  );
};

export default BottomNavBar;
