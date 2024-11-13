import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const handleSubmit=(e)=>{
      e.preventDefault();
  }
  return (
    <div className="flex flex-col max-w-lg  m-auto text-center my-7 mb-36">
      <h1 className="text-2xl capitalize font-semibold">sign up</h1>
      <form  onSubmit={handleSubmit} className="flex flex-col w-[70%] m-auto my-4 gap-5">
        <input
          type="text"
          placeholder="name"
          className="p-3 w-full border capitalize"
          required
        />
        <input
          type="email"
          placeholder="email"
          className="p-3 w-full border capitalize"
          required
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 w-full border capitalize"
          required
        />
        <button type='submit' className="p-3 w-full bg-black border capitalize text-white rounded-md">
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
}

export default SignUp
