import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         const res = await axios.post(backendUrl + "/api/user/admin", {
           email,
           password,
         });
        
    if(res.data.success){
        setToken(res.data.token);
    }else{
        toast.error(res.data.message)
    }
        
    } catch (error) {
        console.log(error)
        toast.error(res.data.message);
    }
   
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg shadow-gray-500  min-w-[30%] min-h-[45%] p-8  rounded-lg"
      >
        <p className="capitalize font-semibold text-2xl p-2">admin penal</p>
        <div>
          <p className="capitalize text-lg ">email address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="admin.gmail.com"
            className="p-2 border w-full focus:outline-none"
            required
          />
        </div>
        <div>
          <p className="capitalize text-lg ">password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="password"
            className="p-2 border w-full focus:outline-none"
            required
          />
        </div>
        <button className="bg-black text-white w-full p-2 rounded-lg mt-2 capitalize">
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
