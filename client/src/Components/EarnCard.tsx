import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

interface CardProps {
  icon: string;
  title: string;
  reward: number;
}

const EarnCard: React.FC<CardProps> = ({ icon, title, reward }) => {
  const [clicked, setClicked] = useState(false);
  const { setPoints, points } = useContext(StoreContext);
  const [receivedReward, setReceivedReward] = useState<number | null>(null);

  const handleClick = () => {
    if (!clicked) {
      const rewardNumber = Math.floor(Math.random() * reward) + 1;
      setReceivedReward(rewardNumber);
      setClicked(true);
      const final_value = points + rewardNumber;
      setPoints(final_value);
    }
  };

  return (
    <div
      className={`${
        clicked
          ? "bg-green-800 text-white"
          : "bg-gray-800 hover:bg-gray-700 text-yellow-400"
      } rounded-xl p-4 mb-4 flex items-center justify-between cursor-pointer`}
      onClick={handleClick}
      style={{ pointerEvents: clicked ? "none" : "auto" }}
    >
      <div className="flex items-center space-x-4">
        <img src={icon} alt={title} className="w-12 h-12" />
        <div> 
          {clicked ? (
            <h3 className="text-lg text-white font-semibold">
            You received {receivedReward} Points
            </h3>
          ) : (
            <>
            <h3 className="text-lg text-white font-semibold">{title}</h3>
            <p className="text-sm">+{reward}</p>
            </>
          )}
        </div>
      </div>
      <span className="text-gray-400">→</span>
    </div>
  );
};

export default EarnCard;
