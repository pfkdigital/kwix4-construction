import React from "react";
import { services } from "./../Services/data";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="relative flex flex-col h-fit lg:justify-end font-poppins bg-gray-900">
      <div className="relative py-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-60 "></div>
        <div className="relative z-10 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
          <div className="flex flex-wrap pb-10 -mx-3">
            <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
              <p className="inline-block pb-2 text-lg font-bold text-gray-300">
                <span className={"text-orange-400"}>K</span>wix4 Building
                Services
              </p>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <p className="text-base font-normal leading-6 text-gray-400 lg:w-64">
                Your trusted local building services partner, delivering quality
                craftsmanship across all our projects.
              </p>
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
              <h2 className="pb-2 text-lg font-bold text-gray-300 ">
                Quick Links
              </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <ul>
                <li className="mb-4">
                  <Link
                    href="/services"
                    className="inline-block text-base font-normal text-gray-400 hover:text-orange-400"
                    aria-label={"Services PAge"}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/portfolio"
                    className="inline-block text-base font-normal text-gray-400 hover:text-orange-400"
                    aria-label="Portfolio Page"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/contact"
                    className="inline-block text-base font-normal text-gray-400 hover:text-orange-400"
                    aria-label={"Contact page"}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-11 lg:mb-0 md:w-1/4 lg:w-2/12">
              <h2 className="pb-2 text-lg font-bold text-gray-300">Legal </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <ul>
                <li className="mb-4">
                  <p className="text-base font-normal text-gray-400">
                    Company No:<span> 14409251</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className="ml-auto w-full px-4 mb-11 lg:mb-0 md:w-1/3 lg:w-3/12">
              <h2 className="pb-2 text-lg font-bold text-gray-300 ">
                Stay Connected
              </h2>
              <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
              <div className="flex justify-start mt-4 ">
                <Link
                  href="https://www.facebook.com/blessthedecorator/"
                  type="button"
                  className="m-1 leading-normal text-gray-300 uppercase transition duration-150 ease-in-out border-2 border-gray-400 rounded-full dark:border-gray-400 dark:hover:bg-gray-800 hover:border-orange-600 hover:bg-orange-800 w-9 h-9"
                  target="_blank"
                  aria-label="Go to our facebook page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-4 h-full mx-auto text-gray-300 dark:text-gray-400 bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-4 text-center text-gray-300 dark:text-gray-400">
            <span>
              Designed and Developed by{" "}
              <Link
                href={"https://pfkdigital.co.uk"}
                className="font-bold text-orange-400"
                target={"_blank"}
                aria-label="Go the PFK Digitals web page"
              >
                PFK Digital
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden absolute h-auto right-12 top-[-75px] mx-auto w-screen justify-end items-center lg:flex">
        <a href="#nav" aria-label="Go back to the top of the page">
          <div className="h-12 w-12 flex justify-center items-center border-2 border-orange-400 rounded-full cursor-pointer bg-orange-400 transition hover:bg-orange-300 hover:border-orange-300">
            <FaAngleUp />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
