import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { FiShieldOff } from "react-icons/fi";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${search}`);
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
        axiosSecure.patch(`/users/${user._id}/role`, updateInfo).then((res) => {
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

  const handelMakeAdmin = (user) => {
    handelMarkedUserRole(user, "admin");
  };
  const handelRemoveAdmin = (user) => {
    handelMarkedUserRole(user, "user");
  };

  return (
    <div>
      <label className="input mt-2">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="search"
          required
          placeholder="search user"
        />
      </label>
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
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex justify-center items-center">
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handelRemoveAdmin(user)}
                      className="btn btn-sm tooltip bg-red-600"
                      data-tip="remove from admin"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn btn-sm tooltip bg-green-600"
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
