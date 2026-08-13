import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "mr-4 font-bold bg-primary " : "mr-4"
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isActive ? "mr-4 font-bold bg-primary " : "mr-4"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive, isPending }) =>
            isActive ? "mr-4 font-bold bg-primary " : "mr-4"
          }
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/go"
          className={({ isActive, isPending }) =>
            isActive ? "mr-4 font-bold bg-primary " : "mr-4"
          }
        >
          Coverage
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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

        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="btn btn-outline hover:text-secondary font-bold hover:btn-primary">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
