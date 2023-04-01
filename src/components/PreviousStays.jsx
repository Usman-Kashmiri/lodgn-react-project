import React from "react";
import ChatBtn from "./ChatBtn";
import SideNav from "./SideNav/SideNav";

const PreviousStays = () => {
  return (
    <>
      <SideNav />
      <div className="flex flex-col justify-center items-center relative py-8 !pl-[300px] pr-[120px] bg-[#D9D9D9] min-h-screen">
      <h2 className="text-[#72AA83] text-3xl font-[poppins] mt-6 font-[600]">
          Previous Stays
        </h2>
        <span className="mt-2 font-[poppins] text-[#959595]">Coming Soon...</span>
      </div>
      <ChatBtn />
    </>
  );
};

export default PreviousStays;
