import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="dark:bg-gray-900 font-poppins" id="nav">
      <div className="max-w-6xl px-4 mx-auto">
        <nav className="flex items-center justify-between py-3">
          <Link href="/" legacyBehavior>
            <a className="text-3xl font-bold leading-none text-white">
              <span className="text-orange-400">K</span>wix4
            </a>
          </Link>
          <div className="lg:hidden">
            <button
              className={`flex items-center px-3 py-2 border border-orange-400 rounded text-orange-400 hover:text-orange-300 lg:hidden ${
                open ? "hidden" : ""
              }`}
              onClick={() => setOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi bi-list fill-orange-400"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
          </div>
          <ul
            className={`hidden lg:w-auto lg:space-x-12 lg:items-center lg:flex `}
          >
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">
                  Portfolio
                </a>
              </Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <Link href="/contact" legacyBehavior>
              <a className="inline-block px-4 py-3 mr-2 text-xs font-medium leading-none text-white border border-orange-400 rounded-full transition-all hover:bg-orange-400 hover:border-transparent">
                Contact Us
              </a>
            </Link>
          </div>
        </nav>
        <div
          className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${
            open ? "block" : "hidden"
          }`}
        ></div>
        <div
          className={`absolute inset-0 z-10 h-screen p-3 text-white duration-500 transform shadow-md bg-black w-80 lg:hidden lg:transform-none lg:relative ${
            open
              ? "translate-x-0 ease-in-opacity-100"
              : "-translate-x-full ease-out opacity-0"
          }`}
        >
          <div className="flex justify-between px-5 py-2">
            <Link href="/" legacyBehavior>
              <a className="text-2xl font-bold text-white">
                {" "}
                <span className="text-orange-400">K</span>wix4
              </a>
            </Link>
            <button
              className="rounded-md hover:text-blue-300 lg:hidden dark:text-gray-400"
              onClick={() => setOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="bi bi-x-circle fill-orange-400"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <ul className="px-5 text-left mt-7 ">
            <li className="pb-3">
              <Link href="/" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">Home</a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/services" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">
                  Services
                </a>
              </Link>
            </li>
            <li className="pb-3">
              <Link href="/blog" legacyBehavior>
                <a className="text-sm text-white hover:text-orange-400">
                  Portfolio
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center mt-5 lg:hidden">
            <Link href="/contact" legacyBehavior>
              <a className="inline-block w-full px-4 py-3 mr-2 text-xs font-bold leading-none text-center text-white bg-orange-400 hover:bg-orange-300 rounded-full">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
