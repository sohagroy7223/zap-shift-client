import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { FiShieldOff } from "react-icons/fi";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handelMarkedUserRole = (user, role) => {
    const updateInfo = { role: role };
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} want to be a ${role}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${role}`,
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}`, updateInfo).then((res) => {
          refetch();

          if (res.data.modifiedCount) {
            Swal.fire({
              title: `An ${role}!`,
              text: `${user.displayName} Marked as an ${role}`,
              icon: "success",
            });
          }
        });
    });
  };

  const handelMakeUser = (user) => {
    handelMarkedUserRole(user, "admin");
  };
  const handelMakeAdmin = (user) => {
    handelMarkedUserRole(user, "user");
  };

  return (
    <div>
      <h3>management Users : {users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>user</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Actions</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex justify-center items-center">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-sm tooltip"
                      data-tip="remove from admin"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handelMakeUser(user)}
                      className="btn btn-sm tooltip"
                      data-tip="add an Admin"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>Action</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
