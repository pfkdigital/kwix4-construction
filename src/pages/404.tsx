import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="relative h-screen bg-gray-500 font-poppins">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 "></div>
      <div className="flex items-center h-screen">
        <div className="container relative justify-center px-4 mx-auto text-center">
          <h1 className="inline-block mb-8 font-semibold text-gray-200 text-7xl lg:text-9xl">
            Error 404
          </h1>
          <h2 className="mb-8 text-2xl font-semibold text-gray-100 lg:text-4xl ">
            Page not found
          </h2>
          <p className="mb-8 text-xl text-gray-200 ">
            Sorry! we are unable to find the page that you are looking for...
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <Link
              href="/"
              className="px-8 py-4 mb-4 mr-4 text-sm font-medium text-gray-100 bg-orange-600 rounded-full hover:bg-orange-800 md:w-auto"
            >
              Go homepage
            </Link>
            <a
              href=""
              className="px-8 py-4 mb-4 text-sm font-medium text-gray-100 bg-orange-600 rounded-full md:w-auto hover:bg-orange-800"
            >
              Try again
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
