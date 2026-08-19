import React from "react";
import Logo from "../../../Components/Logo/Logo";
import useAuth from "../../../Hooks/useAuth";

const DashboardNav = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Logo></Logo>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardNav;
