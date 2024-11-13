import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center uppercase text-3xl gap-4   text-gray-500">
        <p>
          <span>{text1}</span>{" "}
          <span className="text-slate-900 text-4xl">{text2}</span>
        </p>
      </div>
    </div>
  );
};

export default Title;
