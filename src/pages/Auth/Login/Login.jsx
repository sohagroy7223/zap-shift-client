import React from "react";
import { Link } from "react-router";

import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      console.log("after login", result);
    });
  };

  const handelSignUser = (data) => {
    signInUser(data.email, data.password).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="p-5 rounded-2xl shadow-2xl shadow-gray-500 bg-white">
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Welcome Back
      </h3>
      <form onSubmit={handleSubmit(handelSignUser)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            autoComplete="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          don't have an account{" "}
          <Link
            className="text-blue-600 font-bold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </form>
      <button
        onClick={handelGoogleLogin}
        className="btn bg-gray-100 text-black w-full mx-auto mt-3 border-[#e5e5e5]"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
