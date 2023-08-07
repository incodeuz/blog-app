import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoaderGif from "../assets/icons/loader.gif";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const [userNameInput, passwordInput] = e.target.querySelectorAll("input");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userNameInput.value,
            password: passwordInput.value,
          }),
        }
      );

      const data = await response.json();
      data?.token && toast.success("Siz muvaffaqiyatli tizimga kirdingiz");
      data?.statusCode === 400 && toast.error(data.message);
      if (data.token) {
        setIsLoading(false);
        localStorage.setItem("token", data.token);
        localStorage.setItem("my_id", data.user.id);
        localStorage.setItem("my_name", data.user.full_name);
        return navigate("/");
      }
    } catch (error) {
      error && toast.error(error.message);
    }
  };

  return (
    <>
      <Link to="/" className="absolute top-7 left-7">
        ← Back
      </Link>
      <form
        onSubmit={(e) => loginUser(e)}
        className="w-full max-w-[500px] absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <h1 className="text-center m-6 font-semibold text-2xl">
          {localStorage.getItem("register_id")
            ? "Login to your account"
            : "Login"}
        </h1>
        <div className="mb-6">
          <label
            htmlFor="username"
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
            htmlFor="password"
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
        {!localStorage.getItem("register_id") && (
          <div className="flex items-start mb-6">
            If you don't have an account,
            <Link
              className="ml-2 text-indigo-500 underline font-semibold"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
        <button
          type="submit"
          className="h-[40px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
        >
          {isLoading ? (
            <img
              className="w-full object-contain h-full"
              src={LoaderGif}
              alt="loader"
            />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default Login;
