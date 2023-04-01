import React from "react";
import './Card.css';

const Card = ({svgTxt, distance, singlePrice, doublePrice}) => {
  return (
    <div className="bg-[#F5F4F4] border-2 rounded-md flex flex-col items-center w-full">
      <span className="text-[#85C371] p-5 text-md font-[poppins] font-[400] italic flex flex-col items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="59"
          fill="none"
          viewBox="0 0 54 59"
        >
          <path
            stroke="#85C371"
            strokeLinecap="round"
            strokeWidth="5"
            d="M22.019 6.563c-2.264 2.82-7.426 15.41-9.962 43.202M38.32 3c-3.774 5.048-11.593 22.714-12.68 53M3 36.849c5.132-6.532 21.917-19.24 48-17.815"
          ></path>
        </svg>
        {svgTxt}
      </span>
      <div className="cards-footer flex flex-col items-center gap-4 rounded-md p-4 w-full">
        <span className="text-xs text-[#959595]">
          {distance} miles away from joblocation.
        </span>
        <span className="flex justify-between text-[#959595] items-center w-full">
          <span className="flex flex-col gap-2 text-xs">
            <span>Singles: ${singlePrice}</span>
            <span>Doubles: ${doublePrice}</span>
          </span>
          <span className="px-5 py-2 rounded-lg bg-[#44A16F] text-white">
            Book now
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
