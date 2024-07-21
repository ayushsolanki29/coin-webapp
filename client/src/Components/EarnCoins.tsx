import { dollarCoin, youtube } from "../images";
import BottomNavBar from "./BottomNavBar";

const EarnCoins = () => {
  return (
    <>
      <div className="bg-gray-900 h-sceen text-white min-h-screen flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center mt-8">
          <img
            src={dollarCoin} // replace with actual path
            alt="Coin"
            className="w-24 h-24"
          />
          <h1 className="text-3xl font-bold mt-4">Earn more coins</h1>
        </div>

        {/* Hamster Youtube Section */}
        <div className="w-full mt-10 px-4">
          <h2 className="text-xl font-bold mb-4">Youtube</h2>
          <div className="bg-gray-800 rounded-xl p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={youtube} alt="YouTube" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">
                  The trend you can't ignore
                </h3>
                <p className="text-sm text-yellow-400">+100,000</p>
              </div>
            </div>
            <span className="text-gray-400">→</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={youtube} alt="YouTube" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">
                  Bitcoin’s Biggest Falls
                </h3>
                <p className="text-sm text-yellow-400">+100,000</p>
              </div>
            </div>
            <span className="text-gray-400">→</span>
          </div>
        </div>

        {/* Daily Tasks Section */}
        <div className="w-full mt-10 mb-5 px-4">
          <h2 className="text-xl font-bold mb-4">Daily tasks</h2>
          <div className="bg-gray-800 rounded-xl p-4 mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={dollarCoin} alt="Calendar" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">Daily reward</h3>
                <p className="text-sm text-yellow-400">+6,649,000</p>
              </div>
            </div>
            <span className="text-gray-400">→</span>
          </div>
        </div>
        <br />
      </div>
      <BottomNavBar />
    </>
  );
};

export default EarnCoins;
