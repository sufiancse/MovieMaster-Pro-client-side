import React, { useEffect, useState } from "react";
import { IoLogInSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-movies"}
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : ""
          }
        >
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/my-collections"}
          className={({ isActive }) =>
            isActive ? "text-red-700 font-bold" : ""
          }
        >
          My Collection
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black/70 backdrop-blur-md text-gray-400 fixed w-full z-50">
      <div className="navbar   container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold text-red-500 tracking-wide">
            MovieMaster Pro
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <input
            onChange={(e) => handleTheme(e.target.checked)}
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle"
          />

       

            <div className="block md:hidden">
            <NavLink
              to={"/login"}
              
            >
              <IoLogInSharp size={24}/>
            </NavLink>
          </div>

          <div className="hidden md:block space-x-2">
               <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? " btn btn-primary " : "btn "
              }
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive ? " btn btn-primary" : "btn"
              }
            >
              Register
            </NavLink>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
