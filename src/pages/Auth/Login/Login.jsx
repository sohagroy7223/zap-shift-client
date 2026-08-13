import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="p-5 rounded-2xl shadow-2xl shadow-gray-500 bg-white">
      <h3 className="md:text-4xl text-2xl font-bold text-center">
        Welcome Back
      </h3>
      <form>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
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
    </div>
  );
};

export default Login;
