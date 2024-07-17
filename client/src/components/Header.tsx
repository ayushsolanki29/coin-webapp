import React from "react";
import Hamster from "../icons/Hamster";
import binanceLogo from "../images/binance-logo.png";
import dollarCoin from "../images/dollar-coin.png";
import Info from "../icons/Info";
import Settings from "../icons/Settings";
interface HeaderProps {
  levelNames: string[];
  levelIndex: number;
  calculateProgress: () => number;
  profitPerHour: number;
  formatProfitPerHour: (profit: number) => string;
}

const Header: React.FC<HeaderProps> = ({
  levelNames,
  levelIndex,
  calculateProgress,
  profitPerHour,
  formatProfitPerHour,
}) => {
  return (
    <div className="px-4 z-10">
      <div className="flex items-center space-x-2 pt-4">
        <div className="p-1 rounded-lg bg-[#1d2025]">
          <Hamster size={24} className="text-[#d4d4d4]" />
        </div>
        <div>
          <p className="text-sm">username (CEO)</p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-4 mt-1">
        <div className="flex items-center w-1/3">
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-sm">{levelNames[levelIndex]}</p>
              <p className="text-sm">
                {levelIndex + 1}{" "}
                <span className="text-[#95908a]">/ {levelNames.length}</span>
              </p>
            </div>
            <div className="flex items-center mt-1 border-2 border-[#43433b] rounded-full">
              <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                <div
                  className="progress-gradient h-2 rounded-full"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-2/3 border-2 border-[#43433b] rounded-full px-4 py-[2px] bg-[#43433b]/[0.6] max-w-64">
          <img src={binanceLogo} alt="Exchange" className="w-8 h-8" />
          <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
          <div className="flex-1 text-center">
            <p className="text-xs text-[#85827d] font-medium">
              Profit per hour
            </p>
            <div className="flex items-center justify-center space-x-1">
              <img
                src={dollarCoin}
                alt="Dollar Coin"
                className="w-[18px] h-[18px]"
              />
              <p className="text-sm">{formatProfitPerHour(profitPerHour)}</p>
              <Info size={20} className="text-[#43433b]" />
            </div>
          </div>
          <div className="h-[32px] w-[2px] bg-[#43433b] mx-2"></div>
         <a href="/login">
          <Settings className="text-white" />
         </a>
        
        </div>
      </div>
    </div>
  );
};

export default Header;
