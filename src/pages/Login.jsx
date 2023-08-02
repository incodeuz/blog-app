import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form
      className="w-full max-w-[500px] absolute top-[50%] left-[50%]"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <h1 className="text-center m-6 font-semibold text-2xl">Login</h1>
      <div className="mb-6">
        <label
          for="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your username
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="@example"
          required
        />
      </div>
      <div className="mb-6">
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="flex items-start mb-6">
        If you don't have an account,
        <Link
          className="ml-2 text-indigo-500 underline font-semibold"
          to="/register"
        >
          Register
        </Link>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
      >
        Login
      </button>
    </form>
  );
};

export default Login;
