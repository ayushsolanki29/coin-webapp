import React from "react";
import mainCharacter from "../images/main-character.png";

interface MainCircleProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const MainCircle: React.FC<MainCircleProps> = ({ onClick }) => {
  return (
    <div className="px-4 mt-4 flex justify-center">
      <div
        className="w-80 h-80 p-4 rounded-full circle-outer"
        onClick={onClick}
      >
        <div className="w-full h-full rounded-full circle-inner">
          <img
            src={mainCharacter}
            alt="Main Character"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MainCircle;
