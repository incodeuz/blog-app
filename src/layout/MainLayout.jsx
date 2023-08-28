import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="w-[100%] max-w-[800px] mx-auto mt-[50px]">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
