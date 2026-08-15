import React, { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSignUser = (data) => {
    setErrorMessage("");
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          setErrorMessage("Incorrect email or password");
        }
      });
  };

  return (
    <div className="p-5 rounded-2xl shadow-2xl shadow-gray-500 bg-white">
      <div className="text-center">
        <h3 className="md:text-3xl text-2xl font-bold text-center">
          Welcome Back
        </h3>
        <p className="font-medium text-secondary">please login</p>
      </div>
      <form onSubmit={handleSubmit(handelSignUser)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email Filed is Required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            autoComplete="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password Field is Required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 creatures or longer
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500">Incorrect email or password</p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-primary text-secondary font-bold mt-4">
            Login
          </button>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
