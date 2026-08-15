import React from "react";
import Logo from "../../../Components/Logo/Logo";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  // console.log(user);
  const handelSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "want to Log Out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    })
      .then((result) => {
        if (result.isConfirmed)
          signOutUser().then(() => {
            Swal.fire({
              title: "Log Out",
              text: "Log out Success fully",
              icon: "success",
            });
            navigate("/login");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <button
            onClick={handelSignOut}
            className="btn btn-outline hover:text-secondary text-xs md:text-sm hover:btn-primary"
          >
            Log out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline hover:text-secondary text-xs md:text-sm hover:btn-primary">
              Log in
            </button>
          </Link>
        )}
        <Link>
          <button className="btn  text-secondary text-xs md:text-sm btn-primary">
            Be a Rider
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
