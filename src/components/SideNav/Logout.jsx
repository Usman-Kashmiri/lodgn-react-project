import React from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const Logout = () => {
  return (
    <>
      <SideNav />
      <div className="flex flex-col justify-center items-center relative py-8 !pl-[300px] pr-[120px] bg-[#D9D9D9] min-h-screen">
        <Link
          to="/"
          className="flex justify-center items-center font-[poppins] text-white h-12 bg-[#48AF78] rounded-xl px-8 py-2"
        >
          Login
        </Link>
      </div>
    </>
  );
};

export default Logout;
