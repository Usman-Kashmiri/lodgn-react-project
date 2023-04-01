import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideNav.css";


const SideNav = () => {

  const location = useLocation();

  const navClass = "flex h-12 font-[600] cursor-pointer items-center text-[0.875rem] outline-none transition duration-300 ease-linear hover:text-[#72AA83] hover:text-inherit hover:outline-none focus:text-[#72AA83] focus:outline-none active:text-[#72AA83] active:outline-none";

  const navs = [
  {
    id:1,
    route:'/',
    navName:'Current Requests'
  },
  {
    id:2,
    route:'/ongoing-stays',
    navName:'Ongoing Stays'
  },
  {
    id:3,
    route:'/previous-stays',
    navName:'Previous Stays'
  },
  {
    id:4,
    route:'/reports',
    navName:'Reports'
  },
]

  return (
    <nav
      className="flex flex-col justify-between pb-12 fixed top-0 left-0 z-[1035] h-screen w-60 overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] dark:bg-zinc-800"
    >
      <ul className="relative m-0 list-none py-4 px-6">
        <span>
          <h1 className="text-[2.4rem] italic p-4 font-[700]">LODGN</h1>
        </span>
       {
          navs.map((nav) => {
            return (
            <li className="relative border-b-2" key={nav.id}>
            <Link
              to={nav.route}
              className={ location.pathname === nav.route ? "text-[#72AA83] " + navClass : "text-[#494949] " + navClass}
            >
              <span>{nav.navName}</span>
            </Link>
          </li>
          )
          })
       }
      </ul>
      { location.pathname !== '/logout' ?
      <div className="flex px-5 flex-col gap-3">
        <Link to='/logout' className="flex justify-center items-center font-[poppins] text-white h-12 bg-[#48AF78] rounded-xl">Log-Out</Link>
        <span className="flex flex-col items-center">
          <span>
            Help-Desk:
          </span>
          <span>786-874 9988</span>
        </span>
      </div> : null
      }
    </nav>
  );
};

export default SideNav;
