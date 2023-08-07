import React from "react";
import Logo from "../assets/icons/logo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[10px] px-[30px] flex items-center justify-between">
      <img src={Logo} alt="" />
      {localStorage.getItem("token") ? (
        <button
          // onClick={() => navigate("/login")}
          type="button"
          className="px-[11px] py-[6px] bg-white text-indigo-600 rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
        >
          👤 {localStorage.getItem("my_name")}
        </button>
      ) : (
        <button
          onClick={() => navigate("/login")}
          type="button"
          className="px-[11px] py-[6px] bg-indigo-600 text-white rounded-md border-[3px] border-transparent active:border-[3px] active:border-indigo-400 "
        >
          Join
        </button>
      )}
    </div>
  );
};

export default Navbar;
