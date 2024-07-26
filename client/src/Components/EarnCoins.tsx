import { dollarCoin, youtube } from "../images";
import BottomNavBar from "./BottomNavBar";
import EarnCard from "./EarnCard";

const EarnCoins = () => {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={dollarCoin}
            alt="Coin"
            className="w-24 h-24"
          />
          <h1 className="text-3xl font-bold mt-4">Earn more coins</h1>
        </div>

        {/* Hamster Youtube Section */}
        <div className="w-full mt-10 px-4">
          <h2 className="text-xl font-bold mb-4">Youtube</h2>
          <EarnCard icon={youtube} title="The trend you can't ignore" reward={4000} />
          <EarnCard icon={youtube} title="Bitcoin’s Biggest Falls" reward={5000} />
        </div>

        {/* Daily Tasks Section */}
        <div className="w-full mt-10 mb-5 px-4">
          <h2 className="text-xl font-bold mb-4">Daily tasks</h2>
          <EarnCard icon={dollarCoin} title="Daily Claim" reward={2000} />
          <EarnCard icon={dollarCoin} title="Daily Surprise Reward" reward={2500} />
        </div>
        <div className="w-full mt-1 mb-5 px-4">
          <h2 className="text-xl font-bold mb-4">Just For You</h2>
          <EarnCard icon={dollarCoin} title="Thanks For Creating Account" reward={500} />
          <EarnCard icon={dollarCoin} title="Reach at Level 2" reward={100} />
        </div>
        <br />
      </div>
      <BottomNavBar />
    </>
  );
};

export default EarnCoins;
