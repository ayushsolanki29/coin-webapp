import { useState } from "react";
import { dollarCoin } from "../images";
import BottomNavBar from "./BottomNavBar.tsx";

const Friends = () => {
  const [code, setCode] = useState("");
  const handleGenrateCode = () => {
    setCode("NJSD23");
  };
  const handleCopyCode = () => {
    const referInput = document.getElementById("refer") as HTMLInputElement;
    referInput.select();
    referInput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(referInput.value);
    alert("Code copied: " + referInput.value);
  };
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Main Content */}
      <div className="flex flex-col items-center w-full px-4 py-6">
        <h2 className="text-2xl font-bold mb-2">Invite friends!</h2>
        <p className="text-center mb-4">
          You and your friend will receive bonuses
        </p>

        {/* Invite a friend section */}
        <div className="w-full space-y-4">
          <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={dollarCoin} alt="Gift" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">Invite a friend</h3>
                <p className="text-sm text-yellow-400">
                  +5,000 for you and your friend
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={dollarCoin} alt="Gift" className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">
                  Invite a friend vai Telegram
                </h3>
                <p className="text-sm text-yellow-400">
                  +25,000 for you and your friend
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="mt-4 text-blue-500">More bonuses</button> */}

        {/* List of friends */}
        <div className="w-full mt-6">
          <h3 className="text-lg font-semibold">Enter Your Frineds Code</h3>
          <input
            type="text"
            className="bg-gray-800 rounded-xl p-4 mt-2 w-full text-center"
            placeholder="Enter Your Friend Code"
            autoComplete="off"
          />
        </div>

        {/* Invite a friend button */}
        <button className="mt-4 bg-blue-600 rounded-full px-4 py-2 text-white">
          Redeem Code
        </button>
        <div className="w-full mt-6">
          <h3 className="text-lg font-semibold">Your Code</h3>

          <div className="flex w-full space-x-2 mt-2">
            {code !== "" ? (
              <input
                type="text"
                id="refer"
                value="FHSU546"
                className="bg-gray-800 rounded-l-xl p-4 w-3/4 text-center"
                placeholder="Enter Your Friend Code"
                autoComplete="off"
                readOnly
              />
            ) : (
              ""
            )}
            {""}
            <button
              className={`bg-blue-600 hover:bg-blue-800 ${
                code !== "" ? "rounded-r-xl  w-1/4" : "rounded-xl w-full"
              }  p-4  text-white`}
              onClick={ code !== "" ? handleCopyCode : handleGenrateCode}
            >
             {code !== "" ? "Copy":"Genrate Code"}
            </button>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Friends;
