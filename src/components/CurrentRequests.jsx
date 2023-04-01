import React from "react";
import ChatBtn from "./ChatBtn";
import LowerContainer from "./LowerContainer";
import SideNav from "./SideNav/SideNav";
import UpperContainer from "./UpperContainer";

const CurrentRequests = () => {
  return (
    <>
      <SideNav />
      <div className="relative py-8 !pl-[300px] pr-[120px] bg-[#D9D9D9] min-h-screen">
        <h2 className="text-[#72AA83] text-xl font-[poppins] mt-6 font-[600]">
          You currently have 3 requests
        </h2>
        <div className="flex flex-col justify-between gap-8">
          <UpperContainer />
          <LowerContainer />
        </div>
        <ChatBtn />
      </div>
    </>
  );
};

export default CurrentRequests;
