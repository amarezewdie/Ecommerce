import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import List from "./pages/List";
import Order from "./pages/Order";
import Add from "./pages/Add";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken} />
          <div className="w-full flex">
            <SideBar />
            <div className="w-[70%  m-8">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Order token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
