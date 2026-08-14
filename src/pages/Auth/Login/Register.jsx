import { pattern } from "framer-motion/client";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    createUser(data.email, data.password).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="p-5 rounded-2xl shadow-2xl shadow-gray-500 bg-white">
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Sign up Now
      </h3>
      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email Field is Required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              validate: {
                uppercase: (value) =>
                  /[A-Z]/.test(value) || "Add an uppercase letter",

                lowercase: (value) =>
                  /[a-z]/.test(value) || "Add a lowercase letter",

                number: (value) => /\d/.test(value) || "Add a number",

                special: (value) =>
                  /[@$!%*?&]/.test(value) || "Add a special character",

                length: (value) =>
                  value.length >= 6 || "Password must be at least 6 characters",
              },
            })}
            className="input"
            autoComplete="password"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password Field is Required</p>
          )}

          {errors.password?.type === "uppercase" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {errors.password?.type === "lowercase" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {errors.password?.type === "number" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {errors.password?.type === "special" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          {errors.password?.type === "length" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link className="text-blue-600 font-bold hover:underline" to="/login">
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
