import React from "react";

const Square = ({ value }) => {
  return (
    <button className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg">
      {value}
    </button>
  );
};

export default Square;
