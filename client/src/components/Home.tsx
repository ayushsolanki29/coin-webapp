import React, { useState, useEffect } from "react";

import {
  dailyCipher_img,
  dailyCombo_img,
  dailyReward_img,
  dollarCoin,
} from "../images";

import BottomNavBar from "./BottomNavBar";
import MainCircle from "./MainCircle";
import Header from "./Header";
import DailyTask from "./DailyTask";
import FloatingPoints from "./FloatingPoints";

const HomePage: React.FC = () => {
  const levelNames = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Master",
    "Legendary",
    "Supreme",
    "God",
    "Immortal",
  ];
  const levelMinPoints = [
    0, // Bronze
    5000, // Silver
    25000, // Gold
    100000, // Platinum
    1000000, // Diamond
    2000000, // Epic
    10000000, // Legendary
    50000000, // Master
    100000000, // GrandMaster
    1000000000, // Lord
  ];

  const [levelIndex, setLevelIndex] = useState(() => {
    // Read from local storage on component mount
    const savedLevelIndex = localStorage.getItem("levelIndex");
    return savedLevelIndex ? parseInt(savedLevelIndex, 10) : 0;
  });
  const [points, setPoints] = useState(() => {
    // Read from local storage on component mount
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? parseInt(savedPoints, 10) : 0;
  });
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );

  const pointsToAdd = 100;
  const profitPerHour = 100000;

  const [dailyRewardTimeLeft, setDailyRewardTimeLeft] = useState("");
  const [dailyCipherTimeLeft, setDailyCipherTimeLeft] = useState("");
  const [dailyComboTimeLeft, setDailyComboTimeLeft] = useState("");

  const calculateTimeLeft = (targetHour: number) => {
    const now = new Date();
    const target = new Date(now);
    target.setUTCHours(targetHour, 0, 0, 0);

    if (now.getUTCHours() >= targetHour) {
      target.setUTCDate(target.getUTCDate() + 1);
    }

    const diff = target.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    const paddedHours = hours.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHours}:${paddedMinutes}`;
  };

  useEffect(() => {
    const updateCountdowns = () => {
      setDailyRewardTimeLeft(calculateTimeLeft(0));
      setDailyCipherTimeLeft(calculateTimeLeft(19));
      setDailyComboTimeLeft(calculateTimeLeft(12));
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Save points and levelIndex to local storage whenever they change
    localStorage.setItem("points", points.toString());
    localStorage.setItem("levelIndex", levelIndex.toString());
  }, [points, levelIndex]);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  const formatProfitPerHour = (profit: number) => {
    if (profit >= 1000000000) return `+${(profit / 1000000000).toFixed(2)}Cr`;
    if (profit >= 1000000) return `+${(profit / 1000000).toFixed(2)}Lakhs`;
    if (profit >= 1000) return `+${(profit / 1000).toFixed(2)}K`;
    return `+${profit}`;
  };

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-black text-white h-screen font-bold flex flex-col max-w-xl">
        <Header
          formatProfitPerHour={formatProfitPerHour}
          profitPerHour={profitPerHour}
          calculateProgress={calculateProgress}
          levelIndex={levelIndex}
          levelNames={levelNames}
        />

        <div className="flex-grow mt-4 bg-[#f3ba2f] rounded-t-[48px] relative top-glow z-0">
          <div className="absolute top-[2px] left-0 right-0 bottom-0 bg-[#1d2025] rounded-t-[46px]">
            <div className="px-4 mt-6 flex justify-between gap-2">
              <DailyTask
                imgSrc={dailyCipher_img}
                title="Daily Cipher"
                timeLeft={dailyCipherTimeLeft}
              />
              <DailyTask
                imgSrc={dailyCombo_img}
                title="Daily Combo"
                timeLeft={dailyComboTimeLeft}
              />
              <DailyTask
                imgSrc={dailyReward_img}
                title="Daily Reward"
                timeLeft={dailyRewardTimeLeft}
              />
            </div>
            <div className="px-4 mt-4 flex justify-center">
              <div className="px-4 py-2 flex items-center space-x-2">
                <img src={dollarCoin} alt="Dollar Coin" className="w-10 h-10" />
                <p className="text-4xl text-white">{points.toLocaleString()}</p>
              </div>
            </div>
            <MainCircle onClick={handleCardClick} />
          </div>
        </div>
      </div>

      <BottomNavBar />
      <FloatingPoints
        clicks={clicks}
        pointsToAdd={pointsToAdd}
        handleAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
};

export default HomePage;
