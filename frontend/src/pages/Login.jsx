import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import { ShopContext } from "../contexts/ShopContext";

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  /* ....................  if token navigate to home page....................................... */
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div
      className="flex flex-col max-w-lg  m-auto text-center my-7 mb-36
    "
    >
      <h1 className="text-2xl capitalize font-semibold">sign in</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[70%] m-auto my-4 gap-5"
      >
        <input
          type="email"
          placeholder="email"
          className="p-3 w-full border capitalize"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 w-full border capitalize"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="p-3 w-full bg-black border capitalize text-white rounded-md"
        >
          sign in
        </button>
        <div className="flex self-start gap-3 text-sm">
          do not have an account
          <Link to={"/sign-up"} className="text-sm text-blue-500 ">
            sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
