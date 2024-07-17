import React from "react";
import binanceLogo from "../images/binance-logo.png";
import hamsterCoin from "../images/hamster-coin.png";
import Friends from "../icons/Friends";
import Coins from "../icons/Coins";

const BottomNavBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      <a href="/" className="text-center text-[#85827d] w-1/5 bg-[#1c1f24] m-1 p-2 rounded-2xl">
        <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />
        <p className="mt-1">Exchange</p>
      </a>
  
      <a href="/login" className="text-center text-[#85827d] w-1/5">
        <Friends className="w-8 h-8 mx-auto" />
        <p className="mt-1">Friends</p>
      </a>
      <a href="/" className="text-center text-[#85827d] w-1/5">
        <Coins className="w-8 h-8 mx-auto" />
        <p className="mt-1">Earn</p>
      </a>
      <a href="/" className="text-center text-[#85827d] w-1/5">
        <img src={hamsterCoin} alt="Airdrop" className="w-8 h-8 mx-auto" />
        <p className="mt-1">Airdrop</p>
      </a>
    </div>
  );
};

export default BottomNavBar;
