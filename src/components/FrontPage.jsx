import React from "react";
import logo from "../../src/TaskMLogo.png";
import { MdNotStarted } from "react-icons/md";

function FrontPage() {
  return (
    <div className="bg-white">
      <div className="bg-white flex items-center justify-center mt-40">
        <img
          src={logo}
          alt="logo"
          className="bg-white hover:scale-125 transition-all duration-200 cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="/task-dashboard"
          className="btn bg-[#54c4da] text-[#333334] hover:bg-[#2fdfdc] hover:text-slate-800 rounded-full px-6 flex items-center gap-2 mt-10"
        >
          Get Start <MdNotStarted className="text-2xl"/>
        </a>
      </div>
    </div>
  );
}
export default FrontPage;
