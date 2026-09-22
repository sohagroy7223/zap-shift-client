import React from "react";
import useRole from "../../../Hooks/useRole";
import Loading from "../../../Components/Loading/Loading";
import UserDashboard from "./UserDashboard";
import RiderDashboard from "./RiderDashboard";
import AdminDashboard from "./AdminDashboard";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "user") {
    return <UserDashboard></UserDashboard>;
  } else if (role === "rider") {
    return <RiderDashboard></RiderDashboard>;
  } else {
    return <AdminDashboard></AdminDashboard>;
  }

  return (
    <div>
      <h3>this is home dashboard home</h3>
    </div>
  );
};

export default DashboardHome;
