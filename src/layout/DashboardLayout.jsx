import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto space-y-10">
      <Dashboard></Dashboard>
    </div>
  );
};

export default DashboardLayout;
