import React from "react";
import { services } from "./data";
import ServiceCard from "../ServiceCard/ServiceCard";

type ServicesProp = { theme: "light" | "dark" }

const Services = ({ theme }: ServicesProp) => {
  const renderCards = () => {
    return services.map((service, index) => (
        <ServiceCard key={index} {...service} theme={theme} />
    ));
  };

  return (
      <section className={`flex items-center justify-center bg-gray-100 ${theme === "dark" ? "bg-gray-800" : ""} lg:h-screen`}>
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                  Services
                </h1>
                <h1 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-500"}`}>
                  {" "}
                  Our <span className="text-orange-500"> Services</span>{" "}
                </h1>
                <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                  <div className="flex-1 h-2 bg-orange-200"></div>
                  <div className="flex-1 h-2 bg-orange-400"></div>
                  <div className="flex-1 h-2 bg-orange-600"></div>
                </div>
              </div>
              <p className={`mb-4 text-base font-semibold ${theme === "dark" ? "text-white" : "text-gray-500"} lg:mb-16`}>
                At Kwix4, we deliver a comprehensive range of construction and
                renovation services. Specializing in tiling, flooring, plastering,
                and painting, our expert team also excels in bathroom renovations
                and kitchen installations. Rely on our seasoned craftsmen to
                elevate your spaces with premium quality, durability, and modern
                aesthetics. Experience local expertise backed by years of industry
                experience.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {renderCards()}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Services;
