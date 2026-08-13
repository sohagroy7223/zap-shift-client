import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5 rounded-2xl shadow-2xl shadow-gray-500 bg-white">
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Sign up Now
      </h3>
      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset">
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
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            autoComplete="password"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password Field is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              password must be 6 creatures or longer{" "}
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
