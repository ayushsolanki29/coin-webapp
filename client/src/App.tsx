import HomePage from "./Components/Home";
import LoginPage from "./Components/Login";
import Registration from "./Components/Registration";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Settings from "./Components/Settings";
import Friends from "./Components/Friends";
import EarnCoins from "./Components/EarnCoins";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/friends",
      element: <Friends />,
    },
    {
      path: "/earn",
      element: <EarnCoins />,
    },
  ]);
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router} />
     
    </>
  );
};

export default App;
