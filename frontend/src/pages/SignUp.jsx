import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../contexts/ShopContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/register", {
        name,
        email,
        password,
      });
      if (res.data.success) {
        setToken(res.data.token);

        localStorage.setItem("token", token);
        console.log(res);
        console.log(token);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      } else {
        toast.error(res.data.message);
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="flex flex-col max-w-lg  m-auto text-center my-7 mb-36">
      <h1 className="text-2xl capitalize font-semibold">sign up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[70%] m-auto my-4 gap-5"
      >
        <input
          type="text"
          placeholder="name"
          className="p-3 w-full border capitalize"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          sign up
        </button>
        <div className="flex self-start gap-3 text-sm">
          already have an account
          <Link to={"/login"} className="text-sm text-blue-500 ">
            sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
