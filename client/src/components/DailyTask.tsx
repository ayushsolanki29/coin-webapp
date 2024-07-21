import React from "react";
import { Link } from "react-router-dom";

interface DailyTaskProps {
  imgSrc: string;
  title: string;
  timeLeft: string;
}

const DailyTask: React.FC<DailyTaskProps> = ({ imgSrc, title, timeLeft }) => {
  return (
    <Link to={"/earn"} className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
      <div className="dot"></div>
      <img src={imgSrc} alt={title} className="mx-auto w-12 h-12" />
      <p className="text-[10px] text-center text-white mt-1">{title}</p>
      <p className="text-[10px] font-medium text-center text-gray-400 mt-2">
        {timeLeft}
      </p>
    </Link>
  );
};

export default DailyTask;
