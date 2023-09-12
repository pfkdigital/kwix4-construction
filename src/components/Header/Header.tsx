import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-7xl">
          <h1 className="mb-5 text-6xl font-extrabold text-white">
            <span className="text-orange-400">K</span>wix4 Construction Services
          </h1>
          <p className="mb-10 text-2xl text-orange-400 font-extrabold break-words">
            CRAFTING EXCELLENCE IN EVERY CORNER
          </p>
          <Link href={"/contact"}>
            <button className="btn btn-primary bg-orange-400 border-none outline-none hover:bg-orange-300">
              Get in contact
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute h-auto left-0 bottom-[85px] mx-auto w-screen flex justify-center items-center">
        <a href="#about">
          <div className="h-12 w-12 flex justify-center items-center border-2 border-orange-400 rounded-full cursor-pointer hover:bg-orange-400 transition">
            <FaAngleDown />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
