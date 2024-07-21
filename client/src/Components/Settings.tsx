import { toast } from "react-toastify";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Settings = () => {
  const navigate = useNavigate();
  const { setToken, token, userData } = useContext(StoreContext);
  const handleLogout = () => {
    localStorage.removeItem("coinapp-token");
    localStorage.removeItem("points");
    localStorage.removeItem("levelIndex");
    setToken("");
    navigate("/login");
    toast.info("Logged out successfully");
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex flex-col items-center">
      <header className="w-full flex justify-center items-center mb-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Settings</h2>
      </header>
      <div className="w-full max-w-md">
        <div className="bg-gray-800  p-4 rounded-lg mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="exchange">
            Choose exchange
          </label>
          <div className="bg-[#3b3f45] hover:bg-[#565b62]  p-3 rounded text-white">
            Unit
          </div>
        </div>

        {token ? (
          <>
            <div className="bg-gray-800   p-4 rounded-lg mb-4 gap-2">
              <label className="block text-sm font-bold mb-2" htmlFor="delete">
                Profile
              </label>
              <div className="bg-[#3b3f45] hover:bg-[#565b62] p-3 rounded text-white mb-2">
                {userData?.name}
              </div>
              <div className="bg-[#3b3f45] hover:bg-[#565b62] p-3 rounded text-white mb-2">
                {userData?.email}
              </div>
            </div>
            <div
              onClick={handleLogout}
              className="bg-red-700 hover:bg-red-900   p-3 bottom-0 rounded text-white text-center"
            >
              Logout
            </div>{" "}
          </>
        ) : (
          <div
            onClick={handleLogout}
            className="bg-blue-700 hover:blue-red-900   p-3 bottom-0 rounded text-white text-center"
          >
            Login
          </div>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Settings;
