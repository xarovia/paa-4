import React from "react";

const Card = ({ title, body, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-10">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
      <div className="px-6 pb-4">
      <button className="bg-white hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded w-full shadow">Read More</button>
      </div>
    </div>
  );
};

export default Card;

