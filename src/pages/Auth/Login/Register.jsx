import { pattern } from "framer-motion/client";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the register page", location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    // console.log(data.image[0]);
    const profileImage = data.image[0];
    createUser(data.email, data.password)
      .then((result) => {
        // console.log(result);
        // store image and get the photoURL
        const formData = new FormData();
        formData.append("image", profileImage);

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;

        // post Image
        axios.post(image_API_URL, formData).then((res) => {
          const image = res.data.data.url;
          // console.log(" after get image", image);
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              navigate(location?.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-3 rounded-2xl shadow-2xl  shadow-gray-500 bg-white">
      <h3 className="md:text-3xl text-2xl font-bold text-center mb-3">
        Sign up Now
      </h3>
      <form onSubmit={handleSubmit(handelRegister)}>
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input"
            placeholder="Your name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name Field is Required</p>
          )}
          {/* photo input filed */}
          <label className="label">Image</label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input "
          />
          {errors.image?.type === "required" && (
            <p className="text-red-500">Image Field is Required</p>
          )}
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
          <button className="btn bg-primary text-secondary font-bold mt-4">
            Sign Up
          </button>
        </fieldset>
        <p>
          Already have an account?{" "}
          <Link
            state={location.state}
            className="text-blue-600 font-bold hover:underline"
            to="/login"
          >
            Login
          </Link>{" "}
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
