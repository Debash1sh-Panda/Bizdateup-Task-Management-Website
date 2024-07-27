import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize, MdHome } from "react-icons/md";
import { FaEdit, FaTasks} from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import logo from "../../src/TaskMLogo.png";


function TaskDashboard() {
  return (
    <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
          </div>
          <div><Outlet className="mt-5 md:mt-2 mx-4" /></div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full md:w-80 md:p-4 sm:p-2 sm:w-20">
            {/* Sidebar content here */}
            <li className="mb-2">
              <Link to="/task-dashboard">
                {" "}
                <img
                  src={logo}
                  alt="logo"
                  className="w-15 h-5 md:w-30 md:h-8"
                ></img>
              </Link>
            </li>
            <hr/>
            <li className="mt-7 mb-3  hover:bg-[#557070] hover:text-[#1b2121] rounded-md ">
              <Link to="/task-dashboard/create-task">
                <FaEdit /> Create Task
              </Link>
            </li>
            <li className=" hover:bg-[#557070] hover:text-[#1b2121] rounded-md ">
              <Link to="/task-dashboard/all-task">
                <FaTasks /> All Task
              </Link>
            </li>
            <hr className="mt-2"/>
            <li className="mt-4 hover:bg-[#557070] hover:text-[#1b2121] rounded-md ">
              <Link to="/">
                <MdHome /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskDashboard;
