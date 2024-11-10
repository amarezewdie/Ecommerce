import React from 'react'

const NewLetter = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="flex flex-col  gap-4 mb-10 mx-auto w-full text-center m-10">
      <p className="text-2xl font-bold">Subscribe now & get 20% off</p>
      <p className="text-gray-400 text-sm ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form onSubmit={handleSubmit} className="w-full flex mx-auto sm:max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="focus:outline-none border p-3 w-full flex-1 sm:w-1/2"
          required
        />
        <button type='submit' className="uppercase px-6 py-3 bg-black text-white">
          subscribe
        </button>
      </form>
    </div>
  );
}

export default NewLetter
