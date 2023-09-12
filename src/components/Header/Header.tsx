import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

export const Header = () => {
  return (
    <section className="shadow-sm font-poppins dark:bg-gray-900">
      <div
        className="relative flex items-center justify-center w-full h-screen text-center bg-center bg-cover "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-80"></div>
        <div className="z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold leading-10 tracking-tight text-gray-50 md:text-6xl">
              <span className="text-orange-400">K</span>wix4 Construction
              Services
            </h2>
            <p className="mb-6 tracking-wide font-bold text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              CRAFTING EXCELLENCE IN EVERY CORNER
            </p>
            <div className="justify-center sm:flex">
              <div className="">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-gray-100 font-bold bg-orange-400 rounded-md shadow hover:bg-orange-300 "
                >
                  Contact us
                </a>
              </div>
            </div>
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
    </section>
  );
};

export default Header;
