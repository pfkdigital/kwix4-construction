import React from "react";

type ServiceHeaderProps = {
  title: string;
  description: string;
};

const ServiceHeader = ({ title, description }: ServiceHeaderProps) => {
  return (
    <div className="relative flex items-center justify-center w-full h-[350px] text-center">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-orange-400 opacity-80"></div>
      <div className="z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-4xl font-bold leading-10 tracking-tight text-white md:text-6xl">
            {title}
          </h2>
          <p className="mb-6 tracking-wide text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
