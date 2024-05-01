import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import Destination from "../../pages/Destination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  const login = window.localStorage.getItem("isLoggedIn");
  const login1 = window.localStorage.getItem("isLoggedIn1");
  const navigate = useNavigate();

  const handleClickHome = (e) => {
    e.preventDefault();
    // console.log(login);
    login
      ? navigate("/home")
      : toast.error("Login or sign up to view the site", {
          position: "bottom-right",
          theme: "light",
        });
  };
  const handleClickDestin = () => {
    // console.log(login);
    !login &&
      toast.error("Login or sign up to view the site", {
        position: "bottom-right",
        theme: "light",
      });
  };
  const handleClickCalender = () => {
    // console.log(login);
    login
      ? navigate("/calendar")
      : toast.error("Login or sign up to view the site", {
          position: "bottom-right",
          theme: "light",
        });
  };
  const handleClickAbout = () => {
    // console.log(login);
    login
      ? navigate("/about")
      : toast.error("Login or sign up to view the site", {
          position: "bottom-right",
          theme: "light",
        });
  };
  const handleClickLogout = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("isLoggedIn1");
    navigate("/login");
  };

  return (
    <div className="py-2 px-32 z-10 border-b-2 border-slate-300 bg-orange-100 w-full relative">
      <div className="flex justify-between ">
        <div className="w-16 h-16 ">
          <img src="./Logo1.jpg" alt="site logo1" />
        </div>
        <div className="font-extrabold text-orange-500 text-4xl">
          <h1>Tourism in INDIA</h1>
        </div>
        <nav className="text-black font-semibold text-sm flex-col">
          <ul className="flex justify-between gap-4 my-4">
            <li onClick={handleClickHome}>
              <div className="hover:text-orange-600 flex hover:cursor-pointer">
                <RiHome4Line className="h-6 w-4" /> Home
              </div>
            </li>
            <li className="destin" onClick={handleClickDestin}>
              <h4 className="hover:text-orange-600 flex hover:cursor-pointer">
                <FaLocationCrosshairs className="h-6 w-4" /> Destinations{" "}
                <MdKeyboardArrowDown className="mt-1" />
              </h4>
              <div className="destination">
                <Destination />
              </div>
            </li>
            <li onClick={handleClickCalender}>
              <div className="hover:text-orange-600 flex hover:cursor-pointer">
                <FaRegCalendarAlt className="h-4 pr-1 w-4" /> Calender
              </div>
            </li>
            <li onClick={handleClickAbout}>
              <div className="hover:text-orange-600 hover:cursor-pointer flex">
                <FcAbout className="h-6 w-4" /> About
              </div>
            </li>
            <li className="user-logo">
              <FaUser className="h-6 w-6 text-orange-600 cursor-pointer" />
              <div className="login-block">
                {login1? (
                  <div className="logout-div">
                    <FaCircleUser className="profile" />
                    <h3
                      onClick={handleClickLogout}
                      className="logoutbutton text-slate-500 hover:text-slate-900"
                    >
                      ↳ Logout
                    </h3>
                  </div>
                ) : (
                  <div className="login-div">
                    <Link
                      to="/login"
                      className="text-slate-500 hover:text-slate-900"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="text-slate-500 hover:text-slate-900"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
