import React, { CSSProperties, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BottomNavBar from "./BottomNavBar.tsx";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";
import { ClipLoader } from "react-spinners";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const override: CSSProperties = {
  borderColor: "gray",
};

const Registration: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const { setToken, token, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(url + "api/user/register", data);
      if (response.data.success) {
        const newToken = response.data.token;
        setToken(newToken);
        localStorage.setItem("coinapp-token", response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while registering.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-8">
      <div className="mx-auto bg-gray-800 max-w-lg rounded-lg p-6 shadow-lg">
        <h1 className="text-center text-3xl font-extrabold text-yellow-400">
          Get Started Today
        </h1>
        <p className="mt-4 text-center text-gray-400">
          Join us and experience the best gaming deals and offers.
        </p>

        <form onSubmit={onRegister} className="mt-8 space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                value={data.name}
                type="text"
                id="name"
                name="name"
                className="w-full rounded-md border-gray-600 bg-gray-700 p-4 pr-12 text-sm text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="Enter Full Name"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                value={data.email}
                name="email"
                type="email"
                id="email"
                className="w-full rounded-md border-gray-600 bg-gray-700 p-4 pr-12 text-sm text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="Enter Email"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                onChange={handleChange}
                value={data.password}
                name="password"
                type="password"
                id="password"
                className="w-full rounded-md border-gray-600 bg-gray-700 p-4 pr-12 text-sm text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                placeholder="Enter Password"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-yellow-400 p-3 text-sm font-medium text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            {isLoading ? (
              <ClipLoader color={"#ffffff"} cssOverride={override} size={20} />
            ) : (
              "Register"
            )}
            
          </button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              className="font-bold text-yellow-400 hover:underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default Registration;
