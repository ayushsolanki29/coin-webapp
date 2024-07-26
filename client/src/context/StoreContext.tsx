import axios from "axios";
import React, {
  createContext,
  ReactNode,
  FC,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";

interface StoreContextProps {
  token: string;
  userData: any;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  levelIndex: number;
  setLevelIndex: React.Dispatch<React.SetStateAction<number>>;
}

const initialContextValue: StoreContextProps = {
  token: "",
  url: "",
  userData: null,
  setToken: () => {},
  points: 0,
  setPoints: () => {},
  levelIndex: 0,
  setLevelIndex: () => {},
};

export const StoreContext =
  createContext<StoreContextProps>(initialContextValue);

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: FC<StoreContextProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);
  const [points, setPoints] = useState<number>(0);
  const [levelIndex, setLevelIndex] = useState<number>(0);
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  // const url = "https://coin-webapp-server.vercel.app/";
  const url = "http://localhost:4000/";
  const fetchUserData = async (token: string | null) => {
    if (token) {
      try {
        const response = await axios.post(
          url + "api/user/userdata",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.data.success) {
          setUserData(response.data.user);
        }
      } catch (error) {
        toast.error("An error occurred while fetching user data.");
        console.error("Fetch user data error:", error);
      }
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("coinapp-token");
    const storedPoints = localStorage.getItem("points");
    const storedLevel = localStorage.getItem("levelIndex");

    if (storedToken && !isDataFetched) {
      setToken(storedToken);
      fetchUserData(storedToken);

      if (!storedPoints || !storedLevel) {
      } else {
        setPoints(parseInt(storedPoints, 10));
        setLevelIndex(parseInt(storedLevel, 10));
      }

      setIsDataFetched(true);
    }
  }, [isDataFetched]);
  useEffect(() => {
    const storedToken = localStorage.getItem("coinapp-token");
    fetchUserData(storedToken);
  }, [token]);

  useEffect(() => {
    if (isDataFetched) {
      localStorage.setItem("points", points.toString());
      localStorage.setItem("levelIndex", levelIndex.toString());
    }
  }, [points, levelIndex, isDataFetched]);

  const contextValue: StoreContextProps = {
    token,
    setToken,
    userData,
    url,
    points,
    setPoints,
    levelIndex,
    setLevelIndex,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
